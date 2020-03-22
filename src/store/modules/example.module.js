
import * as service from '@/services/example.service';

const state = { top_songs: [], fetchTry: 0, error: null };

const actions = {
    getSongs({ commit }) {
        return service.fetchSongs()
            .then((data) => {
                commit('LOADED', data);
            }).catch(err => {
                commit('FAILED', err);
            });
    }
};

const mutations = {
    LOADED(_state, data) {
        _state.fetchTry = _state.fetchTry += 1;
        _state.top_songs = data;
    },
    FAILED(_state, err) {
        _state.fetchTry = _state.fetchTry += 1;
        _state.top_songs = null;
        _state.error = err;
    }
};

const getters = {
    getAllSongs: _state => _state.top_songs,
    hasError: _state => !!_state.error
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
