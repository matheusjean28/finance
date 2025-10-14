import { createContext } from "react";

const bill = {
        contas: {
            internet: {
                name: 'internet',
                value: 150,
                dueDate: '2025-10-16',
                status: true
            },
            agua: {
                name: 'agua',
                value: 10,
                dueDate: '2025-10-12',
                status: false
            },
            luz: {
                name: 'luz',
                value: 80,
                dueDate: '2025-10-18',
                status: false
            },
            cartao: {
                name: 'cartão',
                value: 250,
                dueDate: '2025-10-20',
                status: false
            },
            interanet: {
                name: 'internet',
                value: 150,
                dueDate: '2025-10-16',
                status: true
            },
            agaua: {
                name: 'agua',
                value: 10,
                dueDate: '2025-10-12',
                status: false
            },
            lua: {
                name: 'luz',
                value: 80,
                dueDate: '2025-10-18',
                status: false
            },
            caratao: {
                name: 'cartão',
                value: 250,
                dueDate: '2025-10-20',
                status: false
            },intearanet: {
                name: 'internet',
                value: 150,
                dueDate: '2025-10-16',
                status: true
            },
            agauaa: {
                name: 'agua',
                value: 10,
                dueDate: '2025-10-12',
                status: false
            },
            luaa: {
                name: 'luz',
                value: 80,
                dueDate: '2025-10-18',
                status: false
            },
            caaratao: {
                name: 'cartão',
                value: 250,
                dueDate: '2025-10-20',
                status: false
            },
        }
    };

type AppContextType = {
  screen: string | null;
  setScreen: React.Dispatch<React.SetStateAction<string | null>>;
popUpStatus: boolean;
setPopUpStatus: React.Dispatch<React.SetStateAction<boolean>>;
bill: typeof bill

};

const AppContext = createContext<AppContextType>({
  screen: null,
  setScreen: () => {},
  popUpStatus: false, 
  setPopUpStatus: () => {},
  bill: bill
});

export default AppContext;
