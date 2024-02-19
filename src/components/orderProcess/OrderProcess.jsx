import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./orderProcess.css";
const OrderProcess = () => {
    return (
    
        <div className="order-process-container">
          <h1 className="title">How it works?</h1>
          <div className="step">
            <div className="step-circle">1</div>
            <div className="step-content">
              <h2> We Take Your Order</h2>
              <p>Visit our website or call our hotline to place your order.</p>
            </div>
          </div>
          <FaArrowDown className="arrow-icon" />
          <div className="step">
            <div className="step-circle">2</div>
            <div className="step-content">
              <h2> We Make Cake</h2>
              <p>Our skilled bakers will prepare your cake with <br /> the finest ingredients.</p>
            </div>
          </div>
          <FaArrowDown className="arrow-icon" />
          <div className="step">
            <div className="step-circle">3</div>
            <div className="step-content">
              <h2> Deliver or Pickup</h2>
              <p>Your freshly baked cake will be delivered <br />to your doorstep at the specified time.</p>
              <p>Alternatively, you can pick up your order from our store location.</p>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=1233&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cake" width="350px" />

          </div>
        </div>
      );
    }

export default OrderProcess;
