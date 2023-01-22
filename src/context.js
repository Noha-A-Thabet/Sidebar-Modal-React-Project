import React, { useState, useContext, createContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [isSideBarOpen, setIsSideBarOpen] = useState(false)

     // handle side bar 
     const openSideBar = () => {
          setIsModalOpen(true)
     }
     const closeSideBar = () => {
          setIsModalOpen(false)
     }

     // handle modal
     const openModal = () => {
          setIsSideBarOpen(true)
     }
     const closeModal = () => {
          setIsModalOpen(false)
     }

     return (
          <AppContext.Provider value={{
               isModalOpen,
               isSideBarOpen,
               openModal,
               openSideBar,
               closeModal,
               closeSideBar
          }}>
               {children}
          </AppContext.Provider>
     )
}
// custome hook
export const useGlobalContext = () => {
     return useContext(AppContext)
}

export { AppContext, AppProvider }