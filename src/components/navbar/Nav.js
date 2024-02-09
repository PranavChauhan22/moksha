
import React, { useRef,useState,useEffect } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { RxHamburgerMenu } from "react-icons/rx";
import { jwtDecode } from "jwt-decode";
import SignUpModal from "../signup/SignUpModal";



export default function PopupDoc() {
    const [name, setname] = useState(null);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);
  
    const openSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        const data = jwtDecode(token);
        setname(data.name);
      }
    }, []);
    const menuLeft = useRef(null);
    const menuRight = useRef(null);
    const toast = useRef(null);
    const items = [
        {
         
            items: [
                {
                    label: 'History',
                    icon: 'pi pi-refresh',
                    url:"#history"
                    
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-upload',
                    url:"#footer"
                },
                {
                    label: 'Events',
                    icon: 'pi pi-upload',
                    url:"/events"
                },
                {
                    label: 'Contingent Leader',
                    icon: 'pi pi-upload',
                    url:"/cl"
                },
                {
                    label: 'Merchandise',
                    icon: 'pi pi-upload',
                    url:"https://nsut.store/"
                },
            ]
        }
    ];

    return (
        <>
         
       
        <div className="card flex justify-content-center" style={{position:"absolute",right:"10px",top:"10px"}}>

       
            <Toast ref={toast}></Toast>
           
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button label="" icon={<RxHamburgerMenu/>} className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        </div>
        {!name ? (
        <span
         
          onClick={() => setIsSignUpModalOpen(true)}
          style={{ cursor: "pointer",position:"absolute",left:"25px",top:"25px",backgroundColor:"",color:"white",fontWeight:"bolder" }}
        >
          REGISTER
        </span>
      ) : (
        <div className="welcome_user" style={{ cursor: "pointer",position:"absolute",left:"25px",top:"25px",backgroundColor:"",color:"white ",fontWeight:"bolder" }}>Welcome, {name}</div>
      )}
       <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
        </>
    )
}
        