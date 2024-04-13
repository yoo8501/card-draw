import React from "react";
import styled from "styled-components";

const Wrap: any = styled.div`
  position: relative;
  cursor: pointer;
  width: 140px;
  height: 210px;
  border-radius: 8px;
  transform-style: preserve-3d;
  perspective: 1100px;
  /* &:hover {
    transform: rotateY(180deg);
  } */
  ${(props: any) => {
    if (props.opened) {
        return `
      // transition: all 0.5s;
      // transform-style: preserve-3d;
      // perspective: 1100px;
      // transform: rotateY(180deg);
      animation: card-rotate forwards 0.5s linear;
      `;
    } else {
        return `
      @keyframes card-expansion {
        from {
          transform: scale(1);
        }

        to {
          transform: scale(1.2);
        }
        }
        &:hover {
          animation: card-expansion forwards 0.3s linear;
        }
      `;
    }
}}
  @keyframes card-rotate {
    from {
      transform: rotateY(0deg) scale(1.2);
    }

    to {
      transform: rotateY(180deg) scale(1);
    }
  }
`;

const Front = styled.img`
  position: absolute;
  height: inherit;
  border-radius: inherit;
  z-index: 5;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
const Back = styled.img`
  position: absolute;
  height: inherit;
  border-radius: inherit;
  z-index: 10;
  backface-visibility: hidden;
`;
export default function Card({card, handleCard}: CardState) {
    const getCard = (opened: any, target: any) => {
        if (!target) {
            return (
                <>
                    <Front src="/front.png" alt=""/>
                    <Back
                        src="/back.png"
                        alt=""
                        onClick={() => {
                            handleCard({opened: true, target: card.target}, card.idx);
                        }}
                    />
                </>
            );
        } else if (target) {
            return (
                <>
                    <Front src="/front-target.png" alt=""/>
                    <Back
                        src="/back.png"
                        alt=""
                        onClick={() => {
                            handleCard({opened: true, target: card.target}, card.idx);
                        }}
                    />
                </>
            );
        }
    };
    return <Wrap opened={card.opened}>{getCard(card.opened, card.target)}</Wrap>;
}

interface CardState {
    card: any,
    handleCard: any,
    key?: number
}
