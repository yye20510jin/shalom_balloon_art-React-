import{useEffect,useState} from"react";
import{authFetch} from "../api/authFetch";

function Admin(){
    const[message,setMessage] = useState("");
    const[error, setError] = useState("");

    useEffect(()=>{
        const fetchAdminData = async () =>{
            try{
                const res = await authFetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/admin/test`,{method:"GET",});
                
                if(!res){
                    setError("관리자 권한이 없거나, 로그인 필요");
                    return;
                }

                const text = await res.text();
                setMessage(text);
            }catch(e){
                console.error(e);
                setError("서버 에러 발생");
            }
        };
        fetchAdminData();
    },[]);

    return(
        <div style={{padding:20}}>
            <h1>관리자 페이지</h1>
            {error && <p style={{color:"red"}}>{error}</p>}
            {message && <p>{message}</p>}
        </div>
    );
}
export default Admin;