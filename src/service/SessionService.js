import ApiService from './ApiService';

const SessionService = {
    async getAllSessions() {
        try {
            const response = await ApiService.get('getAllSessions');
            return response.data;
        } catch (error) {
            console.error('Error fetching menu items:', error);
            throw error;
        }
    },
    async addSession(newSession) {
        try {
            const response = await ApiService.post('addSession', newSession);
            return response.data;
        } catch (error) {
            console.error('Error adding menu item:', error);
            throw error;
        }
    }
};

export default SessionService;
