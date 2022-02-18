// 액션 타입
// 앞 뒤 이름 똑같이 해서 행위_(요청|성공|실패)_ACTION="행위_(요청|성공|실패)_ACTION";
export const SELECT_REQUEST_ACTION = "SELECT_REQUEST_ACTION";
export const SELECT_SUCCESS_ACTION = "SELECT_SUCCESS_ACTION";
export const SELECT_FAILURE_ACTION = "SELECT_FAILURE_ACTION";

// 액션 제너레이터
export const selectContents = (data) => ({
  type: SELECT_REQUEST_ACTION,
  data,
});
