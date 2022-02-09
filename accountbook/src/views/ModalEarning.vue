<template>
  <div id="ModalEarning">  
    <v-card id="myCard">
      <v-card-title> 수입 입력 </v-card-title>
      <div id="cardContents">
      <calendar style="display:none" @kim="getDate(date)"></calendar>
      <v-card-text>
        <v-expansion-panels
          :value = [4,1,2,3,0]
          multiple
        >
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              User
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
                  Enter a name for the trip
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ trip.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          
          <v-row no-gutters>
            <v-col cols="4">
              Seller
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

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            Items
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
                Select trip destination
              </span>
              <span
                v-else
                key="1"
              >
                {{ trip.location }}
              </span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col cols="5">
            <v-select
              v-model="trip.location"
              :items="locations"
              chips
              flat
              solo
            ></v-select>
          </v-col>

          <v-divider
            vertical
            class="mx-4"
          ></v-divider>

          <v-col cols="3">
            Select your destination of choice
            <br>
            <a href="#">Learn more</a>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="secondary"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
        <v-row no-gutters>
          <v-col cols="4">
            Date
          </v-col>
          <v-col
            cols="8"
            class="text--secondary"
          >
            <v-fade-transition leave-absolute>
              <span v-if="open">When was that day?</span>
              <v-row
                v-else
                no-gutters
                style="width: 100%"
              >
                <v-col cols="6">
                  The date: {{ trip.start || 'Not set' }}
                </v-col>
              </v-row>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row
          justify="space-around"
          no-gutters
        >
          <v-col cols="3">
            <v-menu
              ref="startMenu"
              :close-on-content-click="false"
              :return-value.sync="trip.start"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="trip.start"
                  label="Start date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startMenu.isActive = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.startMenu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Name
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
                  Enter a name for the trip
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ trip.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              Amount
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
                  Enter a name for the trip
                </span>
                <span
                  v-else
                  key="1"
                >
                  {{ trip.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field
          v-model="trip.name"
          placeholder="Caribbean Cruise"
        ></v-text-field>
      </v-expansion-panel-content>
    </v-expansion-panel>



  </v-expansion-panels>
      </v-card-text>
  </div>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
        <v-btn color="primary" text @click="makeInput">Save</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>



<script>

import Calendar from "../components/Calendar.vue"

export default {
  name: 'ModalEarning',
  components: {
    calendar: Calendar,
  },
  data () {
    return {
      dialog2: false,
      panel: [1],
      seller: null,
      items: [
      
      ],
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
    }
  },
  computed:{
    sellers(){
      return this.$store.getters.getSellers;
    }
  },
  methods:{
    makeInput(){
      return
    },
    getDate(date){
      console.log(1)
      console.log(date)
    },
    selectSeller(e){
      const targetSpan = e.currentTarget.querySelector("span")
      this.seller = targetSpan.textContent;
      const panel = targetSpan.closest(".v-expansion-panel")
      panel.classList.remove("v-expansion-panel--active")
      panel.classList.remove("v-item--active")
      panel.setAttribute("aria-expanded", "false")
      const panelContents = panel.querySelector(".v-expansion-panel-content")
      panelContents.style.display="none"
      const panelBtn = panel.querySelector("button")
      panelBtn.classList.remove("v-expansion-panel-header--active")
      this.panel.splice(0,1)
    }

  },
  }
</script>



<style>
  @import '../resetting.css';
  
  #ModalEarning #myCard{
    height: 90vh;
  }

  #cardContents{
    height: 80%;
  }
  .sellerGroup button{
    margin: 1vh;
    min-width: 14vh !important;
  }
  
</style>