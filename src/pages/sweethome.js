import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStringInput } from '../store/home_slice_input';

// 나의 영화 리스트 입력 및 출력
const Home = () => {
  const [userInput, setUserInput] = useState(''); // 사용자의 입력값은 useState로 관리하고, Redux 스토어의 상태는 useSelector로 가져온다

  const dispatch = useDispatch(); // 사용자 액션을 스토어로 보내기 위해 디스패치 함수 정의

  const reduxInputs = useSelector((state) => state.input?.values || []); // 빈 슬라이스 값 탐색. (빈 슬라이스가 없을 때, 빈배열을 반환하는 이유는 이 방법이 절대적으로 오류를 방지하기 때문이라고 한다.)

  // 사용자 입력값 저장
  const save = (e) => { 
    e.preventDefault(); // 폼 태그 새로고침 방지. 없으면 이후 동작이 의도치 않은 방향으로 될 수 있음. ex) 폼 제출 이후 작성완료 페이지가 아닌 초기 페이지 출력, 비동기 처리중인 데이터 전송 중단으로 인한 손실 등
    const action = addStringInput(userInput); // 사용자 입력값을 액션(객체)으로 만들어서
    dispatch(action); // 디스패치 함수로 스토어로 보낸다
    setUserInput(''); // 이후 입력값을 빈 문자열로 초기화.
  };

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder='영화 제목 입력'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)} 
          />
          <button onClick={save} className='border border-grey-500'>
            저장
          </button>
        </form>
      </div>

      <div>
        <h1>영화 리스트</h1> {/* 사용자 입력값을 조건에 맞게 출력 */}
        <ul>
          {reduxInputs.length > 0 ? ( 
            reduxInputs.map((input, index) => (
              <li key={index}>
                {input}
              </li>
            ))
          ) : (
            <p>데이터가 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

/* + ) useState가 리덕스 보다 좋을 때 
1. 상태가 특정 컴포넌트에 국한되어 있고, 다른 컴포넌트와 공유할 필요가 없을 때.
2. 상태의 구조가 단순할 때.
3. 빠르게 프로토타입을 만들어야 할 때.
4. 프로젝트 규모가 작거나 Redux와 같은 상태 관리 도구가 필요 없을 때.

위 경우가 아니면 리덕스가 더 좋음.
*/

export default Home;