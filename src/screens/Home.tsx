import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../hooks/useAppSelector';
import {fetchUsers} from '../../features/users';

export default function Home() {
  const data = useAppSelector(state => state.users.data);
  const loading = useAppSelector(state => state.users.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>my data</Text>
      {loading === 'pending' ? (
        <ActivityIndicator />
      ) : (
        <Text>{JSON.stringify(data)}</Text>
      )}
    </View>
  );
}
