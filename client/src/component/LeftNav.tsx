import styled from 'styled-components';
import { Link } from 'react-router-dom' 
import { useState } from 'react';

const ContainerWrap = styled.div`
  position: fixed;
  height: 100%;
  width: 5%;
  margin-left: 5px;
  background-color: white;
.btn {
    text-decoration-line: none;
    color: #34495E;
    &:hover {
    cursor: pointer;
    outline: none;
    color: black;
    }
&.target {
    color: blue;
    text-shadow: 2px 2px 2px gray;
}
}`

const BackCategory = styled.li`
 margin-top:20px;
 font-size: 25px;
`

const FrontCategory = styled.li`
 font-size: 25px;
`

const ParentMenuWrap = styled.ul`

`
const ChildMenuWrap = styled.li`
 margin-top:10px;
`

function Leftnav (props:any):JSX.Element  {
    const [targetBoard, setTargetBoard] = useState<any>(['','']);
       
    console.log(targetBoard)

    return (
        <ContainerWrap onClick={
            ()=>{
                props.setPageChanged(true); 
                const nowURL = new URL(window.location.href);
                const parentCategory = nowURL.searchParams.get('parentcategory');
                const childCategory = nowURL.searchParams.get('childcategory');
                setTargetBoard([parentCategory, childCategory])}
            }>
            <ParentMenuWrap>
                <FrontCategory><Link to = '/board?parentcategory=front' className = {`btn ${targetBoard[0]==='front' && !targetBoard[1]?'target':''}`}>Front</Link></FrontCategory>
                <ChildMenuWrap><Link to = '/board?parentcategory=front&childcategory=html' className = {`btn ${targetBoard[1]==='html'?'target':''}`}>HTML</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=front&childcategory=css' className = {`btn ${targetBoard[1]==='css'?'target':''}`}>CSS</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=front&childcategory=javascript' className = {`btn ${targetBoard[1]==='javascript' && targetBoard[0] === 'front'?'target':''}`}>JavaScript</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=front&childcategory=react' className = {`btn ${targetBoard[1]==='react'?'target':''}`}>React</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=front&childcategory=프론트 기타' className = {`btn ${targetBoard[1]==='프론트 기타'?'target':''}`}>기타</Link></ChildMenuWrap>
            </ParentMenuWrap>
            <ParentMenuWrap>
                <BackCategory><Link to = '/board?parentcategory=back' className = {`btn ${targetBoard[0]==='back' && !targetBoard[1]?'target':''}`}>Back</Link></BackCategory>
                <ChildMenuWrap><Link to = '/board?parentcategory=back&childcategory=php' className = {`btn ${targetBoard[1]==='php'?'target':''}`}>PHP</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=back&childcategory=node.js' className = {`btn ${targetBoard[1]==='node.js'?'target':''}`}>Node.js</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=back&childcategory=javascript' className = {`btn ${targetBoard[1]==='javascript' && targetBoard[0]==='back'?'target':''}`}>JavaScript</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=back&childcategory=java' className = {`btn ${targetBoard[1]==='java'?'target':''}`}>Java</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=back&childcategory=python' className = {`btn ${targetBoard[1]==='python'?'target':''}`}>Python</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=back&childcategory=server' className = {`btn ${targetBoard[1]==='server'?'target':''}`}>서버</Link></ChildMenuWrap>
                <ChildMenuWrap><Link to = '/board?parentcategory=back&childcategory=백엔드 기타' className = {`btn ${targetBoard[1]==='백엔드 기타'?'target':''}`}>기타</Link></ChildMenuWrap>
            </ParentMenuWrap>
        </ContainerWrap>       
    )
}

export default Leftnav;