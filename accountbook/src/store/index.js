import Vue from 'vue'
import Vuex from 'vuex'

console.log(process.env.VUE_APP_KAKAO_HOST);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spendings : [
      {id : "rlals",
      when : "2022-01-01",
      where : "이마트",
      who : "Kimin",
      spendingName : "테스트 지출건a",
      what: {
        name: "생선 등 2종",
        amount : "30,000",
      },
      how : {
        paymentName : "우리생활비계좌",
        creditOrDebit : "현금/체크",
        creditMethods: "-",
        creditTerm : "-",
      },
      why : "식재료",
      },
      {id : "rlals1",
      when : "2022-02-01",
      where : "홈마트",
      who : "Eunjin",
      spendingName : "가나다라",
      what: {
        name: "정육 등 3종",
        amount : "140,000",
      },
      how : {
        paymentName : "현대카드",
        creditOrDebit : "신용",
        creditMethods: "일시불",
        creditTerm : "-",
      },
      why : "식재료",
      },
      {id : "rlals",
      when : "2022-02-04",
      where : "KT",
      who : "Kimin",
      spendingName : "`21.9월 통신비`",
      what: {
        name: "통신비",
        amount : "72,000",
      },
      how : {
        paymentName : "현대카드",
        creditOrDebit : "신용",
        creditMethods: "일시불",
        creditTerm : "-",
      },
      why : "통신비",
      },
      {id : "rlals1",
      when : "2022-02-17",
      where : "스타벅스",
      who : "Eunjin",
      spendingName : "가나다라",
      what: {
        name: "아메리카노 등 2종",
        amount : "16,000",
      },
      how : {
        paymentName : "현대카드",
        creditOrDebit : "신용",
        creditMethods: "일시불",
        creditTerm : "-",
      },
      why : "카페",
      },
    ],
    spendingItems : [{
      id : "rlals-1",
      itemName : "김치", 
      itemPrice : "10000",
      itemQunatity : "1",
      Amounts : "10000",
      time : "rlals",
      seller : "이마트",
      category : "식재료",
      },{
      id : "rlals-2",
      itemName : "카레", 
      itemPrice : "1000",
      itemQunatity : "1",
      Amounts : "1000",
      time : "rlals",
      seller : "이마트",
      category : "식재료",
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
      "식자재","외식","간식/기호","주류","이체","의류","보험료","기타"
    ],
    earningCategories : [
      "투자수익","월급 외","용돈"
    ],
    assetsCategory1 : [
      "부채", "금융", "자산", 
    ],
    assetsCategory2 : {
      liabilities : [
        {
          name:"신용카드대금",
          amount: 10000000
        },
        {
          name: "신용대출",
          amount: 10000
        },
        {
          name: "전세대출",
          amount: 10000
        },
        {
          name: "개인부채",
          amount: 2000000
        }
      ],
      finance : [
        {
          name:"현금",
          amount: 10000000
        },
        {
          name: "우리은행 생활비",
          amount: 1000
        },
        {
          name: "보험금",
          amount: 100000
        }
      ],
      assets :[
        {
          name:"가상화폐",
          amount: 10000000
        },
        {
          name: "보증금",
          amoutn: 1000
        }
      ]
    },
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
    ],
    Users: [],
  },
  mutations: {
    addItems(state, {item, kind}) {
      if(kind == "spending"){
        state.spendings.push(item);
      }
    },
  },
  actions: {
    addItems({commit}, {item, kind}){
      commit('addItems', {item, kind})
    },
  },
  modules: {
  },
  getters:{
    getSellers : (state) => {
      const data = [...state.sellers];
      return data;
    },
    getSpendingItems(state) {
      return state.spendigItems
    },
    getSpendingCategories(state) {
      return state.spendingCategories
    },
    getSpending(state){
      return state.spendings;
    },
    getAssetCategory2(state){
      return state.assetsCategory2;
    }
  }
})
