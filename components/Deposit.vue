import Fees from '.';
<template>
  <div class="fees">
    <div class="token-fees">
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to deposit automaticaly your DOVX on your account."
          :variant="d_e ? 'success' : 'danger'"
          @click="switching(0)"
          >Deposit DFE: {{ d_e ? "ON" : "OFF" }}</b-button
        >
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to deposit automaticaly your DOVH on your account."
          :variant="d_f ? 'success' : 'danger'"
          @click="switching(1)"
          >Deposit DFW: {{ d_f ? "ON" : "OFF" }}</b-button
        >
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user/getTokens"]),
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      fees: 0,
      d_e: false,
      d_f: false,
      wam: "",
      pushed: false,
    };
  },
  methods: {
        editWam() {
      localStorage.setItem("to", this.wam);
    },
    switching(x) {
      const list = ["d_e", "d_f"];
      let choice;
      if (!x) {
        this.d_e = !this.d_e;
        choice = this.d_e;
      } else if (x == 1) {
        this.d_f = !this.d_f;
        choice = this.d_f;
      } 
      localStorage.setItem(list[x], choice);
    },
      deposit() {
          const quantities = [];
          if (this.d_e) {
              const amx = parseFloat(this["user/getTokens"]["DFE"]).toFixed(4);
              if (amx > 0.0) {
                  quantities.push(`${amx} DFE`);
              }
          }
          if (this.d_f) {
              const amh = parseFloat(this["user/getTokens"]["DFW"]).toFixed(4);
              if (amh > 0.0) {
                  quantities.push(`${amh} DFW`);
              }
          }
          console.log("ressources deposit", quantities);

          if (quantities.length > 0 && !this.pushed) {
              const r_action = {
                  actions: [],
              };
              for (let i in quantities) {
                  r_action.actions.push({
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
                          to: "desertfarmgm",
                          quantity: quantities[i],
                          memo: "",
                      },
                  });
              }

              const r_block = {
                  blocksBehind: 3,
                  expireSeconds: 30,
              };
              const r_transac = {
                  id: "deposit",
                  action: r_action,
                  block: r_block,
              };
              console.log("transact deposit", r_action)
              this.pushed = true;
              this.$store.commit("user/addRAction", r_transac);
          

          setTimeout(() => {
              this.pushed = false;
              console.log("deposit available");
          }, 60000);
          console.log("asked for deposit");
      }
      
    },
    launchDeposit() {
      this.deposit();
      setInterval(() => {
        this.deposit();
      }, 3600 * 500);
    },
  },
  mounted() {
    if (localStorage.getItem("d_e")  && localStorage.getItem("d_e") == "true") {
      this.d_e = localStorage.getItem("d_e");
    }
    if (localStorage.getItem("d_f")  && localStorage.getItem("d_f") == "true") {
      this.d_f = localStorage.getItem("d_f");
    }

    setTimeout(() => {
      this.launchDeposit();
    }, 5000);
  },
};
</script>

<style>
.fees {
  display: inline;
  margin-left: 1%;
}

.token-fees {
  display: flex;
  font-size: small;
  margin-bottom: 1%;
}
.token {
  font-size: small;
  width: 30%;
}

.keep {
  font-size: small;
}

.to {
  width: 100%;
  font-size: small;
}

</style>
