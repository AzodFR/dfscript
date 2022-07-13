<template>
  <div></div>
</template>

<script>
const { JsonRpc } = require("eosjs");
const time = 15000;
export default {
  name: "Interval",
  data() {
    return {
      rpc: null,
    };
  },
  async mounted() {
    this.rpc = new JsonRpc(this.$store.state.user.wax.rpc.endpoint, { fetch });
    if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false") { 
    this.checkRPC();
    this.launchCheck();
  }
    this.fetchStake();
    this.launchIntervalMines();
    this.launchIntervalTokens();
    this.launchIntervalItems();
  },
  methods: {
    launchCheck: async function () {
      setInterval(async () => {
        this.checkRPC();
      }, 600000);
    },
    checkRPC: async function () {
     let valid = false;

      setTimeout(() => {
        if (valid) {
          valid = false
          console.log("rpc checked")
        }
        else {
          console.log("fuck rpc")
          if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false")
            localStorage.setItem('rpc', 'random');
          if (localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "true")
            valid = true;
          if (!localStorage.getItem("autoLogin") || localStorage.getItem("autoLogin") == "false") {
            localStorage.setItem("autoLogin", "rpc")
          }
          window.location.href = "/"
        }
      }, 20000);
      try {
      const rpc = new JsonRpc(this.$store.state.user.wax.rpc.endpoint, { fetch });
        await rpc.get_info().catch((e) => {
            valid = false;
            console.log("fuck rpc")
            if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false")
            localStorage.setItem('rpc', 'random');
            if (!localStorage.getItem("autoLogin") || localStorage.getItem("autoLogin") == "false") {
              localStorage.setItem("autoLogin", "rpc")
            }
          window.location.href = "/"
          }).then(() => {
            valid = true;
          });
      }
      catch (e) {
        valid = false;
        console.log("fuck rpc")
        if (!localStorage.getItem("blockedRPC") || localStorage.getItem("blockedRPC") == "false")
            localStorage.setItem('rpc', 'random');
        if (!localStorage.getItem("autoLogin") || localStorage.getItem("autoLogin") == "false") {
          localStorage.setItem("autoLogin", "rpc")
        }
        window.location.href = "/"
      }
    },
    launchFetchStake: function () {
      this.fetchStake();
      setInterval(() => {
        this.fetchStake();
      }, time);
    },
    fetchTemplate: async function () {},
    async fetchRss() {
      this.rpc
        .get_table_rows({
          json: true,
          code: "desertfarmgm",
          scope: this.$store.state.user.name,
          table: "balances",
        })
        .then(async (resu) => {
          const res = resu.rows;
          console.log(res);
          const sym = ["DFE", "DFW"];
          const sym2 = ["DFE", "DFW"];
          for (let i = 0; i < res.length; i++) {
            sym.splice(sym.indexOf(res[i].balance.split(" ")[1]), 1);
            this.$store.commit("user/setRessource", {
              type: res[i].balance.split(" ")[1],
              value: res[i].balance.split(" ")[0],
            });
          }
          for (let i = 0; i < sym.length; i++) {
            if (this.$store.state.user.ressources[sym[i]] == undefined) {
              this.$store.commit("user/setRessource", {
                type: sym[i],
                value: "0.0000",
              });
            }
          }
        })
          

      this.rpc
        .get_currency_balance("deserttokens", this.$store.state.user.name, "DFE")
        .then(async (resu) => {
          this.$store.commit("user/setToken", {
            type: "DFE",
            value: resu[0] ? parseFloat(resu[0].split(" ")[0]) : 0,
          });
        });
        this.rpc
        .get_currency_balance("deserttokens", this.$store.state.user.name, "DFW")
        .then(async (resu) => {
          this.$store.commit("user/setToken", {
            type: "DFW",
            value: resu[0] ?  parseFloat(resu[0].split(" ")[0]) : 0,
          });
        });
      this.rpc
        .get_currency_balance("eosio.token", this.$store.state.user.name, "WAX")
        .then(async (resu) => {
          this.$store.commit("user/setToken", {
            type: "WAX",
            value: parseFloat(resu[0].split(" ")[0]),
          });
        });
    },
    fetchStake: async function () {
      this.rpc.get_account(this.$store.state.user.name).then(async (rows) => {
        console.log(rows);
        this.$store.commit(
          "user/setStake",
          parseFloat(rows.total_resources.cpu_weight.split(" ")[0]).toFixed(2)
        );
        this.$store.commit(
          "user/setCPU",
          ((rows.cpu_limit.used * 100) / rows.cpu_limit.max).toFixed(0)
        );
      });
    },
    launchIntervalItems: function () {
      this.fetchItems();
      setInterval(() => {
        this.fetchItems();
      }, time);
    },
    async fetchItems() {
      this.rpc
        .get_table_rows({
          json: true,
          code: "desertfarmgm",
          scope: this.$store.state.user.name,
          table: "items",
        })
        .then(async (items) => {
          console.log("items", items);
          if (items.rows.length <= 0) return;
          else
            this.$store.commit("user/setItem", {
              value: items.rows,
              type: "items",
            });
        });
    },
    async launchIntervalTokens() {
      this.fetchRss();
      setInterval(() => {
        this.fetchRss();
      }, time);
    },
    async launchIntervalMines() {
      this.fetchMines();
      setInterval(() => {
        this.fetchMines();
      }, time);
    },
    async fetchMines() {
      this.rpc
        .get_table_rows({
          json: true,
          code: "desertfarmgm",
          scope: "desertfarmgm",
          table: "mines",
          lower_bound: this.$store.state.user.name,
          upper_bound: this.$store.state.user.name,
        })
        .then(async (mines) => {
          console.log(mines);
          if (mines.rows.length <= 0) return;
          else {
            const mine = mines.rows[0];
            const date = new Date(mine.end);
            mine.end = date.getTime();
            console.log("mine", mine)
            this.$store.commit("user/setMine", mine);
          }
        });
    },
  },
};
</script>
