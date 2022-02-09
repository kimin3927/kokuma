```

필요 메서드 : 

-) 지출객체만들기 : 
	지출 공통 인풋 : seller, time, paymentName, creditMethod, creditTerm,
	computed input : user, id, creditOrDebit
	computed input from 개별 : 총 금액, 대표 카테고리, 대표 물품

	개별 물품 인풋 : 
	물품별 단가/수량(or 생략+금액), 카테고리, 물품명, 
	computed input : 금액, id
	computed input from 공통 : user, time, 


1) 지출 건별 합계금액은 속한 지출 개별아이템 객체의 합계금액 의 합. "findItsTotalAmount" 
2) 지출 건별 카테고리는 속한 지출 개별아이템 객체배열내의 각 카테고리별 금액을 합해서 가장 큰 카테고리를 골라서.. "ㅇㅇㅇ 외" 로 작업하게 끔한다.
"findItsRepresentCategory"
3) 지출 건별 이름은 속한 지출 개별아이템 객체배열내의 아이템중 금액이 가장 큰 카테고리의 아이템중 가장 큰 금액을 골라서 "ㅇㅇ마트, ㅇㅇ물품 외"로한다.
4) id는 uuid를 빌리되, 발생년월일 6자리로 시작하게끔. 

```