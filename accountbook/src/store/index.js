import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spendings : [
      {id : "rlals",
      user : "rlals",
      name : "rlals",
      Amounts : "rlals",
      spendingName : "rlals",
      creditOrDebit : "rlals",
      creditMethods: "rlals",
      creditTerm : "rlals",
      paymentName : "rlals",
      time : "rlals",
      seller : "rlals",
      category : "rlals",
      },
    ],
    spendingItems : [{
      id : "rlals",
      user : "rlals",
      itemName : "rlals", 
      itemPrice : "rlals",
      itemQunatity : "rlals",
      Amounts : "rlals",
      time : "rlals",
      seller : "rlals",
      category : "rlals",
      },{
      id : "rlals",
      user : "rlals",
      itemName : "rlals", 
      itemPrice : "rlals",
      itemQunatity : "rlals",
      Amounts : "rlals",
      time : "rlals",
      seller : "rlals",
      category : "rlals",
      },
  ],
    earnings : [
      {
        id : "rlals",
        name : "rlals",
        time : "rlals",
        user : "rlals",
        amount : "rlals",
        category : "rlals",
        place: "rlals",
        earningCategory2 : "rlals",
        deposit : "rlals",
      }
    ],
    assets : [
      {
        name : "rlals",
        user : "rlals",
        institution : "rlals",
        amount : "rlals",
        assetCategory1 : "rlals",
        assetCategory2 : "rlals",
      }
    ],
    spendigItems : [
      "외식","아이스크림","라면","두부","양파","쌀","주유","우유","정육","통신비","넷플릭스"
    ],
    spendingCategories : [
      "식자재","외식","간식/기호","주류","이체","의류","보험료",
    ],
    earningCategories : [
      "투자수익","월급 외","용돈"
    ],
    assetsCategory1 : [
      "부채", "금융", "자산", 
    ],
    assetsCategory2 : [
      {
        category : "liabilities",
        items :["신용카드대금","신용대출","전세대출","개인부채"]
      },
      {
        category : "finance",
        items :["현금","계좌","보험금","연금"]
      },
      {
        category : "assets",
        items :["가상화폐","보증금","자동차"]
      },
    ],
    sellers : [
      {name: "이마트", color:" yellow", show:"이마트"}, 
      {name: "구글", color:" blue", show:"구글"}, 
      {name: "코스트코", color:"red", show:"코스트코"},
      {name: "편의점", color:"orange", show:"편의점"}, 
      {name: "kt", color:"red", show:"kt"}, 
      {name: "카페", color:"brown", icon:"mdi-coffee", show:""}, 
      {name: '쿠팡', color:"green", show:"쿠팡"},
      {name: '어린이집', color:"blue", show:"어린이집"},
      {name: '홈마트', color:"yellow", show:"홈마트"},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getSellers : (state) => {
      const data = [...state.sellers];
      return data;
    },
  }
})
