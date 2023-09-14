import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type UserType = {
  id: string;
  name: string;
};

type UserState = {
  data: UserType[];
  loading: string;
};

const initialState: UserState = {
  data: [],
  loading: 'idle',
};

export const fetchUsers = createAsyncThunk('users/request', async () => {
  const response = await fetch('https://api.github.com/users');
  const data = response.json();
  return data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = 'pending';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = 'idle';
        console.info(action);
        state.data.push(action.payload);
      });
  },
});

export const {setUsers} = usersSlice.actions;

export default usersSlice.reducer;
