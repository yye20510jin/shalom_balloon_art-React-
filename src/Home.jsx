import {useNavigate} from "react-router-dom";
function Home(){

    const navigate = useNavigate();

    const goAdmin = async () =>{
        navigate("/adminLogin");
    };

    const goUser = () =>{
        window.location.href ="/";
    };

    const goMembership =() =>{
        navigate("/membership");
    };

    return(
        <div style={{padding:"20px"}}>
        <h1>샬롬 풍선 아트</h1>

        <button type="button" onClick={goAdmin}>admin</button>
        

        <div style={{marginTop:"10px"}}><button type="button" onClick={goMembership}>회원가입</button></div>

        {/*관리자 로그인 시 보여줄 예정 */}
        <div style={{marginTop:"10px"}}>
        <button type="button" onClick={goUser}>회원관리</button>
        </div>
    </div>

    );
}export default Home;