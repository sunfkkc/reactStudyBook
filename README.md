useCallback hook의 이해 필요 책 209p

form에 onsubmit과 button에 onclick의 차이
!! form onsubmit은 enter를 눌렀을 때도 작동한다
!! button onclick은 key logic을 따로 작성해야 함...
!! 대신 form onsubmit은 새로고침을 일으킨다

컴포넌트가 리렌더링 되는 상황

1. 자신이 전달받은 props가 변경될 때
2. 자신의 state가 바뀔 때
3. 부모 컴포넌트가 리렌더링 될때
4. forceUpdate 함수가 실행될 때

현재 성능 저하의 원인 : 할일 1만 리렌더링 되어야 하지만 2500개의 컴포넌트가 리렌더링 된다.

export default 할 때 컴포넌트를 React.memo()로 감싸주면 부모 컴포넌트가 리렌더링 되더라도
해당 컴포넌트의 props들이 업데이트 되지 않으면 리렌더링 되지 않는다.

todoReducer 정의 완료 해당 컴포넌트에 적용 필요
