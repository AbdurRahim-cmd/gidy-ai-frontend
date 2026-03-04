import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE = "https://gidy-ai-backend.vercel.app";

// Fetch Profile
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${API_BASE}/api/profile`);
      const data = await res.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update Profile
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (profileData, thunkAPI) => {
    try {
      const res = await fetch(`${API_BASE}/api/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(profileData)
      });

      const data = await res.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Generate AI Bio
export const generateAiBio = createAsyncThunk(
  "profile/generateAiBio",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const profile = state.profile.data;

      const res = await fetch(`${API_BASE}/api/ai/generate-summary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
      });

      const data = await res.json();
      return data.summary;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // AI Generate
      .addCase(generateAiBio.pending, (state) => {
        state.loading = true;
      })
      .addCase(generateAiBio.fulfilled, (state, action) => {
        state.loading = false;

        if (state.data) {
          state.data.bio = action.payload;
        }
      })
      .addCase(generateAiBio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default profileSlice.reducer;
