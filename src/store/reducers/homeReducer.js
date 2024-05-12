// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
  dreamModel: "",
  modelConfig: [],
  dreamModelInfo: {
    stopTextEncoder: 0,
    clipSkip: 0,
    attention: "",
    numTrainEpochs: 0,
    saveEmbeddingEvery: 0,
    savePreviewEvery: 0,
    optimizer: '',
    sanityPrompt: '',
    sanitySeed: '',
    trainUnet: true,
    learningRate: 0.000002,
    learningRateMin: 0.000001,
    useLora: false,
    loraUnetRank: 0,
    loraTxtRank: 0,
    loraWeight: 0,
    resolution: 512,
    customModelName: '',
    saveCkptCancel: false,
    mixedPrecision: "",
    cacheLatents: true,
    shuffleTags: true,
    conceptsList: [{
      instanceDataDir: "",
      instancePrompt: "[filewords]",
      instanceToken: "",
      classToken: "",
      classDataDir: "",
      classPrompt: "[filewords]",
      classNegativePrompt: "",
      numClassImagesPer: 0,
      classGuidanceScale: 0.0,
      classInferSteps: 0,
      saveSamplePrompt: "[filewords]",
      saveSampleTemplate: "",
      nsaveSample: 1
    }]
  }
};

const authSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeMenu(state, action) {
      return {
        ...state,
        menu: action.payload.menu
      };
    },
    changeModel(state, action) {
      return {
        ...state,
        dreamModel: action.payload.dreamModel
      };
    },
    getModelConfig(state, action) {
      return {
        ...state,
        modelConfig: action.payload.modelConfig
      };
    },
    getDreamModelInfo(state, action) {
      return {
        ...state,
        dreamModelInfo: action.payload.dreamModelInfo
      };
    },
    editDreamModelInfo(state, action) {
      return {
        ...state,
        dreamModelInfo: action.payload.dreamModelInfo
      }
    }
  },
});

export const { changeMenu, changeModel, getModelConfig, getDreamModelInfo, editDreamModelInfo } = authSlice.actions;

export default authSlice.reducer;
