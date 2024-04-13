import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Firework } from "./Firework";
import styled from "styled-components";
import {Box, Modal, Typography} from "@mui/material";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:'8px'
};
const CustomBox = styled(Box)`
    .game-over {
        position: relative;
        font-size: 48px;
        color: #333;
        text-align: center;
        transform: translateY(-50%);
        animation: bounce 0.5s ease-in-out infinite;
    }

    .game-over:before {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        width: 10px;
        height: 10px;
        background-color: #333;
        transform: translateX(-50%) rotate(45deg);
        animation: bounceDot 0.5s ease-in-out infinite;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(30%);
        }
        50% {
            transform: translateY(0%);
        }
    }

    @keyframes bounceDot {
        0%, 100% {
            top: -10px;
            opacity: 0;
        }
        50% {
            top: -20px;
            opacity: 1;
        }
    }
`
export default function AlarmModal({open,onClose}:any) {
    useEffect(() => {
        Firework();
    }, []);
  return (
      <Modal open={open} onClose={onClose}>

          <CustomBox sx={style}>
              <div className="game-over">잘 먹겠습니다.</div>


          </CustomBox>

      </Modal>
  )

}
