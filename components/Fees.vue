import Fees from '.';
<template>
  <div class="fees">
    <div class="token-fees">
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DFE and send it to selected account."
          :variant="e ? 'success' : 'danger'"
          @click="switching(0)"
          >DFE: {{ e ? "ON" : "OFF" }}</b-button
        >
        <b-input
          @change="editAm(0)"
          type="number"
          class="keep"
          placeholder="Amount to keep"
          v-model="a_e"
          v-b-tooltip.hover
          title="Amount to keep"
        ></b-input>
      </div>
      <div class="token">
        <b-button
          size="sm"
          v-b-tooltip.hover
          title="Activate this to widthraw automaticaly your DFW and send it to selected account."
          :variant="w ? 'success' : 'danger'"
          @click="switching(1)"
          >DFW: {{ w ? "ON" : "OFF" }}</b-button
        >
        <b-input
          @change="editAm(1)"
          type="number"
          class="keep"
          placeholder="Amount to keep"
          v-model="a_w"
          v-b-tooltip.hover
          title="Amount to keep"
        ></b-input>
      </div>
        <div class="goto">
          <b-button
            size="sm"
            v-b-tooltip.hover
            title="Leave blank if you just want to keep it in your wallet."
            :variant="wam != '' ? 'success' : 'danger'"
            disabled
            >Address to send:</b-button
          >
          <b-input
            type="text"
            placeholder="Wax address"
            v-b-tooltip.hover
            title="Leave blank if you just want to keep it in your wallet."
            v-model="wam"
            @change="editWam"
          ></b-input>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user/getRs"]),
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      wam: "",
      a_e: 0,
      a_w: 0,
      e: false,
      w: false,
    };
  },
  methods: {
    editWam() {
      localStorage.setItem("to", this.wam);
    },
    editAm(x) {
      if (!x) {
        localStorage.setItem("a_e", this.a_e);
      } else if (x == 1) {
        localStorage.setItem("a_w", this.a_w);
      }
      
    },
    switching(x) {
      const list = ["e", "w"];
      let choice;
      if (!x) {
        this.e = !this.e;
        choice = this.e;
      } else if (x == 1) {
        this.w = !this.w;
        choice = this.w;
      } 
      localStorage.setItem(list[x], choice);
    }
  },
  mounted() {
   
    if (localStorage.getItem("to")) {
      this.wam = localStorage.getItem("to");
    if (localStorage.getItem("e") && localStorage.getItem("e") == "true") {
      this.e = true;
    }
    if (localStorage.getItem("w") && localStorage.getItem("w") == "true") {
      this.w = true;
      }
    if (localStorage.getItem("a_e")) {
      this.a_e = localStorage.getItem("a_e");
    }
    if (localStorage.getItem("a_w")) {
      this.a_w = localStorage.getItem("a_w");
    }
    }
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
