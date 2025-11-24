import {useEffect, useState} from "react";
import {fetchMessage}from "./api";
import {useNavigate} from "react-router-dom";
function Home(){

    console.log("🔥 Home 렌더링 됨");

    const navigate = useNavigate();
    const [message, setMessage] = useState();

    useEffect(() =>{
        fetchMessage().then(setMessage).catch((err) => console.error(err));},[]
    );

        
    const goAdmin = async () =>{
        const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/admin`
        ,{method:"get"}
        );

        const data = await res.json();

        if(data.success){
        alert("navigate 문제");
        navigate("/adminLogin");
        }else{
        alert("접근 불가");
        }
    };

    const goUser = () =>{
        window.location.href ="/";
    };

    return(
        <div style={{padding:"20px"}}>
        <h1>샬롬 풍선 아트</h1>
        <button type="button" onClick={goAdmin}>admin</button>
        

        {/*관리자 로그인 시 보여줄 예정 */}
        <div style={{marginTop:"10px"}}>
        <button type="button" onClick={goUser}>회원관리</button>
        </div>
    </div>

    );
}export default Home;