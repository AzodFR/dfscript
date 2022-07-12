<template>
  <div>
    <b-button :variant="value ? 'success' : 'danger'" @click="autoOne" :class="value ? 'success' : 'danger'" size="sm">
      C {{value ? '[ON]' : '[OFF]'}}
    </b-button>
  </div>
</template>

<script>
export default {
  name: "LocalAutoClaimButton",
  props: {
    type: String,
    id: String,
  },
  data() {
    return {
      value: false
    }
  },
  methods: {
    autoOne: function() {
      this.value = !this.value;
      localStorage.setItem("claimAuto", this.value);
    }
  },
  mounted() {
    if (!localStorage.getItem("claimAuto"))
    {
      localStorage.setItem("claimAuto", "true");
      this.value = true;
    }
    if (localStorage.getItem("claimAuto") && localStorage.getItem("claimAuto") == "true")
    {
      this.value = true;
    }
    this.$root.$on(`${this.type}autoClaimAll`, () => {
      localStorage.setItem(`${this.id}`, `true`);
        this.$store.commit("user/setAutoClaim", {
          type: this.type,
          id: this.id,
          value: true,
        });
        this.value = this.$store.state.user.autoclaim[this.type][this.id];
    })
  },
};
</script>

<style>
.local-button{
  font-size: small;
}
</style>
