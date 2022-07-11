<template>
  <div>
    <button
      class="DisBtn"
      v-if="!readyToClaim && active"
      :disabled="!checkManual()"
      @click="manualClaim"
    >
      {{ remainingTime }}
    </button>
    <button class="EnBtn" v-else-if="active" @click="handleClaim">
      {{ msg }}
    </button>
    <!--<button @click="test">test</button>-->
    <b-spinner label="Spinning" v-if="wait" class="spinner-login"></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const utcNow = require("utc-now");
export default {
  name: "Counter",
  props: ["active", "timestamp", "autoclaim", "item", "claiminfo"],
  computed: {
    ...mapGetters(["user/getMembers", "user/getMines"]),
  },
  data() {
    return {
      msg: "Ready to claim",
      wait: false,
      loaded: false,
      readyToClaim: false,
      last: undefined,
      queued: false,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      manual: false,
    };
  },
  computed: {
    ISreadyToClaim() {
      return this.readyToClaim;
    },
    _seconds() {
      return 1000;
    },
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    remainingTime() {
      if (this.loaded) {
        return (
          this.displayHours +
          ":" +
          this.displayMinutes +
          ":" +
          this.displaySeconds
        );
      } else {
        return "Getting remaining time...";
      }
    },
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    timestamp: function () {
      this.loaded = false;
      // this.readyToClaim = false;
      this.showRemaining();
    },
    // eslint-disable-next-line object-shorthand
    autoclaim: function () {
      if (this.autoclaim) {
        this.loaded = false;
        // this.readyToClaim = false;
        this.showRemaining();
      }
    },
  },
  mounted() {
    // console.log(this.timestamp)
    this.showRemaining();
    this.$on(`${this.item.asset_id}.claiming`, () => {
      this.last = Date.now();
      console.log("received claiming!");
      this.msg = "Claiming...";
    });
    this.$on("test", (id) => {
      console.log("counter receive test", id);
    });
    this.$on(`${this.item.asset_id}.success`, () => {
      this.last = Date.now();
      console.log("received success!");
      this.msg = "Ready to claim";
      this.readyToClaim = false;
      this.queued = false;
      setTimeout(() => {
        this.last = undefined;
      }, 10000);
      this.showRemaining();
    });
    this.$on(`${this.item.asset_id}.retry`, (nb) => {
      console.log("received retry!");
      this.msg = `Retry to claim/repair... (${nb})`;
    });
  },
  methods: {
    checkManual() {
      const real = this.timestamp;
      const now = new Date();
      const end = new Date(real);
      return (
        parseInt(
          (end.getTime() - now.getTime()) / 1000 / this.item.charged_time + 1
        ).toFixed(0) > 0
      );
    },
    manualClaim() {
      if (this.checkManual()) {
        this.manual = true;
        this.handleClaim();
        setTimeout(() => {
          this.manual = false;
        }, 5000);
      }
    },
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const stake = this.timestamp;

        const end = new Date(stake);
        const distance = end.getTime() - utcNow();
        if (distance <= 0) {
          clearInterval(timer);
          if (this.last == undefined) {
            this.readyToClaim = true;
          }
          this.loaded = true;
          if (
            this.$store.state.user.autoclaim[this.claiminfo.type][
              this.item.asset_id
            ] === true
          ) {
            this.handleClaim();
          }
          return null;
        } else {
          this.readyToClaim = false;
        }

        const hours = Math.floor(distance / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;

        this.loaded = true;
      }, 1000);
    },
    async handleClaim() {
      if (
        this.$store.state.user.actions.find((x) => x.id === this.item.id) !=
        undefined
      )
        return;
      if (!this.queue) {
        this.queued = true;
        try {
          const data = [
            {
              owner: this.$store.state.user.name,
            },
          ];

          const action = {
            actions: [
            ],
          };
          if (
            localStorage.getItem("e") &&
            localStorage.getItem("e") == "true" &&
            localStorage.getItem("a_e")
          ) {
            action.actions.push({
              account: "desertfarmgm",
              name: "withdraw",
              authorization: [
                {
                  actor: this.$store.state.user.name,
                  permission: "active",
                },
              ],
              data: {
                owner: this.$store.state.user.name,
                quantity: `${parseFloat(localStorage.getItem("a_e")).toFixed(
                  4
                )} DFE`,
              },
            });
            if (localStorage.getItem("to")) {
              action.actions.push({
                account: "deserttokens",
                name: "transfer",
                authorization: [
                  {
                    actor: this.$store.state.user.name,
                    permission: "active",
                  },
                ],
                data: {
                  from: this.$store.state.user.name,
                  to: localStorage.getItem("to"),
                  quantity: `${parseFloat(localStorage.getItem("a_e")).toFixed(
                    4
                  )} DFE`,
                  memo: "auto transfer",
                },
              });
            }
          }
          if (
            localStorage.getItem("w") &&
            localStorage.getItem("w") == "true" &&
            localStorage.getItem("a_w")
          ) {
            action.actions.push({
              account: "desertfarmgm",
              name: "withdraw",
              authorization: [
                {
                  actor: this.$store.state.user.name,
                  permission: "active",
                },
              ],
              data: {
                owner: this.$store.state.user.name,
                quantity: `${parseFloat(localStorage.getItem("a_w")).toFixed(
                  4
                )} DFW`,
              },
            });
             if (localStorage.getItem("to")) {
              action.actions.push({
                account: "deserttokens",
                name: "transfer",
                authorization: [
                  {
                    actor: this.$store.state.user.name,
                    permission: "active",
                  },
                ],
                data: {
                  from: this.$store.state.user.name,
                  to: localStorage.getItem("to"),
                  quantity: `${parseFloat(localStorage.getItem("a_w")).toFixed(
                    4
                  )} DFW`,
                  memo: "auto transfer",
                },
              });
            }
          }
          action.actions.push({
                account: "desertfarmgm",
                name: "mine",
                authorization: [
                  {
                    actor: this.$store.state.user.name,
                    permission: "active",
                  },
                ],
                data: {
              owner: this.$store.state.user.name,
            },
              })
          const block = {
            blocksBehind: 3,
            expireSeconds: 30,
          };
          const transac = {
            id: this.item.asset_id,
            action: action,
            block: block,
          };
          console.log("action", transac.action)
          if (this.last == undefined) {
            this.readyToClaim = true;
            console.log("add to queue");
            this.$store.commit("user/addAction", transac);
            this.msg = "Claim in queue...";
          }
          //alert("claiming !");
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 5px;
  border: none;
  font-weight: bold;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.2);
}
.DisBtn {
  background: rgb(211, 140, 9);
  color: rgb(15, 12, 5);
  font-size: small;
}
.EnBtn {
  background: #28a745;
  color: rgb(15, 27, 14);
  font-size: small;
}
</style>
