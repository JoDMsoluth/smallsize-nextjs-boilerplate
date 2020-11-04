import { countState, incrementCount, decrementCount } from '@/recoil/atoms';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const useCounter = () => ({
    count: useRecoilValue(countState),
    increment: useSetRecoilState(incrementCount),
    decrement: useSetRecoilState(decrementCount),
    reset: useResetRecoilState(countState),
});

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <button
                onClick={() => {
                    increment(null);
                }}
            >
                +1
            </button>
            <button
                onClick={() => {
                    decrement(null);
                }}
            >
                -1
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
