import { createContext, useContext, useState } from 'react';

const AppContext = createContext({});

export function Context({ children }) {
	const [labId, setLabId] = useState('');
	const [pinoloId, setPinoloId] = useState('');

	let state = {
		labId: labId,
		pinoliId: pinoloId,
		setLabId: (id) => setLabId(id),
		setPinoloId: (id) => setPinoloId(id),
	};

	return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}
