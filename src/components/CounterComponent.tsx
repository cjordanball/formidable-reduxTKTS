import React from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@app/appState/slices/counterSlice';
import { RootState } from '@app/appState/stores/formidableStore';

const CounterComponent = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View>
            <View>
                <Button aria-label="Increment value" title="Increment" onPress={() => dispatch(increment())} />
            </View>
            <View>
                <Text>{count}</Text>
            </View>
            <View>
                <Button aria-label="Decrement value" title="Decrement" onPress={() => dispatch(decrement())} />
            </View>
        </View>
    )
}

export default CounterComponent