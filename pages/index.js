import React, { useState } from 'react'
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import useInput from '../hooks/useInput';

const Main = styled.main`
    background-color:#eceae9;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const FileInput = styled.label`
    color:#4c4a49;
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 3.5rem;
    line-height:2;
    text-shadow:1px 1px 1px #5c5a59;

    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease;
    };
`;

const Button = styled.button`
    color:#4c4a49;
    font-family: 'GmarketSansMedium', '나눔고딕', NanumGothic, '돋움', Dotum, sans-serif;
    font-size: 3.5rem;
    line-height:2;
    text-shadow:1px 1px 1px #5c5a59;

    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease;
    };
`;

function Worker(name) {
    this.name = name;
    this.workTime = [];

    this.getSum = () => {
        return this.workTime.reduce((result, data) => {
            return result + data.reduce((_res, _d, i) => {
                if(_d === 0 && data[i-1] === 1) {
                    _res--;
                } else if(i === data.length-1 && _d === 1) {
                    _res--;
                }
                return _res + _d;
            }, 0)/2;
        }, 0);
    }
}

const getElem = (sheet, i, R) => {
    let tmp = sheet[XLSX.utils.encode_cell({c:i, r:R})]
    let elem = 'UNKNOWN';
    if(tmp && tmp.t) elem = XLSX.utils.format_cell(tmp);

    return elem;
}

const Home = () => {
    const winSize = useWindowSize();
    const [mainFile, setMainFile] = useState(null);
    const [workerList, setWorkerList] = useState(null);
    const [resultPage, setResultPage] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);

    const parseFile = (e) => {
        const reader = new FileReader();
        console.log('test');
    
        reader.onload = () => {
            const fileData =  reader.result;
            const wb = XLSX.read(fileData, {type : 'binary'});
            const firstSheetName = wb.SheetNames[0];
            const sheet = wb.Sheets[firstSheetName];
            
            const mainSheet = []; 
            let range = XLSX.utils.decode_range(sheet['!ref']);

            for(let R=2; R<=range.e.r; ++R) {
                let rowData = [];
                
                rowData.push(getElem(sheet, 0, R));
                rowData.push(getElem(sheet, 1, R));
                rowData.push(getElem(sheet, 2, R));

                mainSheet.push(rowData);
            }

            setMainFile(mainSheet);
        }
        
        alert(`${e.target.files[0].name}이 정상적으로 업로드 되었습니다`);
        reader.readAsBinaryString(e.target.files[0]);
    };

    const getResult = () => {
        mainFile.sort((a, b) => {
            if(a[0] < b[0]) {
                return -1;
            } else if(a[0] > b[0]) {
                return 1;
            } else {
                if(a[1] < b[1]) {
                    return -1;
                } else if(a[1] > b[1]) {
                    return 1;
                }

                return 0;
            }
        });

        const workers = []; // array of Worker
        let idx = 0;
        while(idx < mainFile.length) {
            const name = mainFile[idx][0];
            const rows = []
            const _worker = new Worker(name);

            while(idx < mainFile.length && mainFile[idx][0] === name) rows.push(mainFile[idx++]);

            let curDay = '';
            let cur = -1;
            rows.forEach(row => {
                const beginDay = row[1].split(' ')[0];
                const endDay = row[2].split(' ')[0];

                if(curDay !== beginDay) {
                    if(_worker.workTime[cur+1] === undefined) {
                        _worker.workTime.push(Array(49).fill(0));
                    }
                    curDay = beginDay;
                    cur++;
                }

                const beginTime = parseInt(row[1].split(' ')[2].split(':')[0]) + (row[1].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);
                const endTime = parseInt(row[2].split(' ')[2].split(':')[0]) + (row[2].split(' ')[2].split(':')[1] == 0 ? 0 : 0.5);

                if(beginDay === endDay) {
                    for(let i=beginTime*2; i<=endTime*2; i++) {
                        _worker.workTime[cur][i] = 1;
                    }
                } else {
                    if(_worker.workTime[cur+1] === undefined) {
                        _worker.workTime.push(Array(49).fill(0));
                    }

                    for(let i=beginTime*2; i<49; i++) {
                        _worker.workTime[cur][i] = 1;
                    }
                    for(let i=0; i<=endTime*2; i++) {
                        _worker.workTime[cur+1][i] = 1;
                    }
                }
            });

            workers.push(_worker);
        }

        setWorkerList(workers);
        setResultPage(true);
    };

    const btnTest = () => {
        console.log(workerList[0]);
    }

    return (
        <Main style={{minHeight:winSize[1]}}>
            {resultPage ?
            <div style={{width:'400px'}}>
                {/* <button onClick={btnTest}>test</button> */}
                {workerList.map((v, i) => {
                    return (
                        <div style={{
                            display:'flex',
                            border:'1px solid #bfbfbf'
                        }}>
                            <div style={{
                                width:'60%',  
                                border:'1px solid #bfbfbf'
                            }}>
                                {v.name}
                            </div>
                            <div style={{
                                width:'40%',  
                                border:'1px solid #bfbfbf'
                            }}> 
                                {v.getSum()}
                            </div>
                        </div>
                    );
                })}
            </div> :
            <>
            <FileInput>
                파일 올리기
                <input type="file" style={{display:'none'}} onChange={parseFile} />
            </FileInput>
            <Button onClick={getResult}>
                결과 보기
            </Button>
            </>}
        </Main>
    );
};

export default Home;