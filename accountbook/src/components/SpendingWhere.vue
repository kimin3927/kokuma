<template>
    <v-expansion-panel class="spendingItems" id="spendingWhere">
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          
          <v-row no-gutters>
            <v-col cols="4">
              Where
            </v-col>
            <v-col
              cols="8"
              class="text--secondary"
            >
              <v-fade-transition leave-absolute>
                <span
                  v-if="open"
                  key="0"
                >
                  Enter a name for the spending
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ seller }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="sellerGroup">
        <v-tooltip top v-for="btn in sellers" :key="btn.name" >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :color="btn.color"
              light
              v-bind="attrs"
              v-on="on"
              @click="selectSeller"
            >  
            <v-icon v-if="btn.icon">{{ `${btn.icon}` }}</v-icon>
              {{ btn.show }}
            </v-btn>
          </template>
          <span>{{ btn.name }}</span>
        </v-tooltip>
        </div>
        <v-text-field
          v-model="seller"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
	data(){
		return{
			seller: null,
		}
	},
	computed:{
		sellers(){
			return this.$store.getters.getSellers;
		}
	},
	methods:{
		selectSeller(e){
			const targetSpan = e.currentTarget.querySelector("span")
			this.seller = targetSpan.textContent.trim();
      this.$emit("giveSeller", this.seller)
		}
	}

}
</script>