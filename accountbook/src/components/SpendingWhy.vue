<template>
	<v-expansion-panel class="spendingItems tail" id="spendingWhy">
		<v-expansion-panel-header>
		<template v-slot:default="{ open }">
				<v-row no-gutters>
				<v-col cols="4">
						Why
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
								Enter category for spending
						</span>
						<span
								v-else
								key="1"
						>
								{{ category }}
						</span>
						</v-fade-transition>
				</v-col>
				</v-row>
		</template>
		</v-expansion-panel-header>
		<v-expansion-panel-content>
		<v-text-field
				v-model="category"
				placeholder="기타"
		></v-text-field>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
export default {
	data(){
		return{
			trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
			date: null,
		}
	},
	props:[
		"category",
	]
}
</script>