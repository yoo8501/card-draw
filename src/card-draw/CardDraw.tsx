import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Firework } from "./Firework";
import styled from "styled-components";
const Wrap = styled.div`
  padding: 16px;
  height: 100%;
`;
const CardWrap = styled.div`
  display: flex;
  row-gap: 16px;
  column-gap: 16px;
  flex-wrap: wrap;
`;
export default function CardDraw() {
  const [cardCnt, setCardCnt] = useState(24);
  const [targetCnt, setTargetCnt] = useState(1);
  const [cardArr, setCardArr] = useState<any>([]);
  function startFunction() {
    return performance.now();
  }

  // 함수 종료 시간과 시간 차이 계산
  function endFunction(startTime: any) {
    const endTime = performance.now();
    const timeDiff = endTime - startTime; // 밀리초 단위의 시간 차이
    console.log("Function took " + timeDiff + " milliseconds");
  }
  const getRandomBoolean = () => {
    return Math.random() < 0.01;
  };
  const addObjectWithRandomTarget = (arr: any, maxLength: any) => {
    if (arr.filter((obj: any) => obj.target).length >= maxLength) {
      //console.log(cnt);

      console.log(arr);
      return false;
    } else {
      //cnt++;
      const randomBoolean = getRandomBoolean();
      if (randomBoolean) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomObject = arr[randomIndex];
        if (!randomObject.target) {
          randomObject.target = randomBoolean;
          arr[randomIndex] = randomObject;
        }
      }
      addObjectWithRandomTarget(arr, maxLength);
    }
  };
  const handleBtn = () => {
    if (cardCnt > 0) {
      // let maxLength = Math.floor(cardCnt / 10);
      // if (maxLength <= 0) {
      //   maxLength = 1;
      // }
      const startTime = startFunction();
      const newArr: any = [];
      for (let index = 0; index < cardCnt; index++) {
        newArr.push({ idx: index, opened: false, target: false });
      }
      addObjectWithRandomTarget(newArr, targetCnt);
      setCardArr(newArr);
      endFunction(startTime);
    }
  };

  return (
    <>
      <input
        className="mb-2"
        style={{ height: "32px", padding: "8px" }}
        type="number"
        value={cardCnt}
        onChange={(e: any) => {
          setCardCnt(parseInt(e.target.value || 1));
        }}
      />
      <input
        className="mb-2"
        style={{ height: "32px", padding: "8px", marginLeft: "16px" }}
        type="number"
        value={targetCnt}
        onChange={(e: any) => {
          setTargetCnt(parseInt(e.target.value || 1));
        }}
      />
      <button
        style={{ height: "32px", padding: "0 8px", marginLeft: "16px" }}
        onClick={() => {
          handleBtn();
        }}
      >
        셔플
      </button>
      <Wrap>
        <CardWrap>
          {/* {Array(cardCnt).fill(<Card opened={false} target={false} />)} */}
          {/*         
        <Card opened={false} target={false} />
        <Card opened={true} target={false} />
        <Card opened={true} target={true} /> */}
          {cardArr.map((card: any) => (
            <Card
              key={card.idx}
              card={card}
              handleCard={(data: any, idx: any) => {
                const copyArr = [...cardArr];
                copyArr[idx] = data;
                console.log(data);
                if (data.target) {
                  Firework();
                }
                setCardArr([...copyArr]);
              }}
            />
          ))}
        </CardWrap>
      </Wrap>
    </>
  );
}
