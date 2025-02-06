import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lineChartData: [
    { month: "Jan", sales: 4000, revenue: 2400, profit: 1600 },
    { month: "Feb", sales: 3000, revenue: 1398, profit: 1000 },
    { month: "Mar", sales: 2000, revenue: 9800, profit: 2300 },
    { month: "Apr", sales: 2780, revenue: 3908, profit: 2000 },
    { month: "May", sales: 1890, revenue: 4800, profit: 1500 },
    { month: "Jun", sales: 2390, revenue: 3800, profit: 1200 },
  ],
  pieChartData: [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Food", value: 300 },
    { name: "Books", value: 200 },
  ],
  barChartData: [
    { category: "Q1", online: 4000, offline: 2400 },
    { category: "Q2", online: 3000, offline: 1398 },
    { category: "Q3", online: 2000, offline: 9800 },
    { category: "Q4", online: 2780, offline: 3908 },
  ],
  areaChartData: [
    { name: "Page A", uv: 4000, pv: 2400 },
    { name: "Page B", uv: 3000, pv: 1398 },
    { name: "Page C", uv: 2000, pv: 9800 },
  ],
  scatterData: [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ],
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updateLineChartData: (state, action) => {
      state.lineChartData = action.payload;
    },
    updatePieChartData: (state, action) => {
      state.pieChartData = action.payload;
    },
    updateBarChartData: (state, action) => {
      state.barChartData = action.payload;
    },
    updateAreaChartData: (state, action) => {
      state.areaChartData = action.payload;
    },
    updateScatterData: (state, action) => {
      state.scatterData = action.payload;
    },
    updateRadarData: (state, action) => {
      state.radarData = action.payload;
    },
  },
});

export const { updateLineChartData, updatePieChartData, updateBarChartData } =
  chartSlice.actions;
export default chartSlice.reducer;
