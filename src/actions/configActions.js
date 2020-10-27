import firebase from 'firebase';

export const RESET = 'RESET';
const reset = (config) => ({
    type: RESET,
    data: config
})

export const SET_CPU = 'SET_CPU';
const setCPU = (proc) => ({
    type: SET_CPU,
    data: proc
});

export const SET_MB = 'SET_MB';
const setMB = (placa) => ({
    type: SET_MB,
    data: placa
});

export const SET_RAM = 'SET_RAM';
const setRAM = (RAM) => ({
    type: SET_RAM,
    data: RAM
})


export const SET_GPU = 'SET_GPU';
const setGPU = (GPU) => ({
    type: SET_GPU,
    data: GPU
})


export const SET_PWR = 'SET_PWR';
const setPWR = (PWR) => ({
    type: SET_PWR,
    data: PWR
})

export const LOAD_CONFIG = 'LOAD_CONFIG';
const load_Config = (config) => ({
    type: LOAD_CONFIG,
    data: config
})



export const doReset = (dispatch) => {
    const config = {CPU: {CPU:'Processador', soq: null}, 
    MB:{MB: 'Placa-mãe', soq: null, vel: null}, 
    RAM:{RAM: 'Memória RAM', vel: null}, 
    GPU:{GPU:'Placa de vídeo', pwr: null}, 
    PWR:{PWR: 'Fonte', pot: null}};
    const action = reset(config);
    dispatch(action);
}

export const set_CPU = (CPU,soq,dispatch) => {
    const proc = {CPU,soq}
    const action = setCPU(proc);
    dispatch(action);
}

export const set_MB = (MB,soq,vel,dispatch) => {
    const placa = {MB,soq,vel}
    const action = setMB(placa);
    dispatch(action);
}

export const set_RAM = (RAM,vel,dispatch) => {
    const memoria = {RAM,vel}
    const action = setRAM(memoria);
    dispatch(action);
}

export const set_GPU = (GPU,pwr,dispatch) => {
    const placa = {GPU,pwr};
    const action = setGPU(placa);
    dispatch(action);
}

export const set_PWR = (PWR,pot,dispatch) =>{
    const fonte = {PWR,pot};
    const action = setPWR(fonte);
    dispatch(action);
}

export const salvarConfig = (nome, config, usuario, navigation) => {
    const conf = {nome, config, usuario}
    firebase
        .firestore()
        .collection('configuracao')
        .add(conf)
        .then(navigation.push('home'))
}

export const updateConfig = (nome, config, usuario, index, navigation) => {
    const conf = {nome, config, usuario}
    firebase
        .firestore()
        .collection('configuracao')
        .doc(index)
        .update(conf)
        .then(navigation.push('home'))
}

export const loadConfig = (load, dispatch) => {
    const config = load;
    const action = load_Config(config);
    dispatch(action)

}