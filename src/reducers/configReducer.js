import { RESET, SET_CPU, SET_GPU, SET_MB, SET_PWR, SET_RAM, LOAD_CONFIG } from "../actions";


export default function configReducer(state = 
    {CPU: {CPU:'Processador', soq: null}, 
    MB:{MB: 'Placa-mãe', soq: null, vel: null}, 
    RAM:{RAM: 'Memória RAM', vel: null}, 
    GPU:{GPU:'Placa de vídeo', pwr: null}, 
    PWR:{PWR: 'Fonte', pot: null}}, action){
    
    switch (action.type){
        case LOAD_CONFIG:
            state = action.data;
            return state;
        case RESET:
            state = action.data;
            return state;
        case SET_CPU:
            state.CPU = action.data;
            if (state.CPU.soq != state.MB.soq){
                state.MB.MB = 'Placa-mãe';
                state.MB.vel = null;
                state.MB.soq = null;
            }
            return state;
        case SET_MB:
            state.MB = action.data;
            if(state.MB.vel < state.RAM.vel){
                state.RAM.RAM = 'Memória RAM';
                state.RAM.vel = null;
            }
            return state;
        case SET_RAM:
            state.RAM = action.data;
            return state;
        case SET_GPU:
            state.GPU = action.data;
            if(state.GPU.pwr > state.PWR.pot){
                state.PWR.PWR = 'Fonte';
                state.PWR.pot = null;
            }
            return state;
        case SET_PWR:
            state.PWR = action.data;
            return state;
        default:
            return state;
    }

}