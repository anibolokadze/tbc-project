"use client";
import React, { useState } from "react";
import { Order } from "../../types";
import style from "./Orders.module.scss";
import Layout from "../layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faEye,
  faEyeSlash,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

interface OrdersProps {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  const { t } = useTranslation();

  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

  const toggleIdVisibility = (id: string) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter((revealedId) => revealedId !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  const formatOrderId = (id: string) => {
    return revealedIds.includes(id) ? id : `${id.slice(0, 10)}*****`;
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible);
    if (filterVisible) {
      handleDateChange([null, null]);
    }
  };

  const filteredOrders = orders.filter((order) => {
    const orderDate = new Date(order.created * 1000);
    if (startDate && endDate) {
      const adjustedEndDate = new Date(endDate);
      adjustedEndDate.setHours(23, 59, 59, 999);
      return orderDate >= startDate && orderDate <= adjustedEndDate;
    } else if (startDate) {
      return orderDate >= startDate;
    } else if (endDate) {
      const adjustedEndDate = new Date(endDate);
      adjustedEndDate.setHours(23, 59, 59, 999);
      return orderDate <= adjustedEndDate;
    }
    return true;
  });

  return (
    <Layout>
      <div className={style.main}>
        <div className={style.ordersContainer}>
          <div className={style.tableHeader}>
            <div className="dark:text-white">ID</div>
            <div>{t("amount")}</div>
            <div>{t("status")}</div>
            <div className={style.filterContainer}>
              {t("date")}:
              <FontAwesomeIcon
                icon={faSort}
                onClick={toggleFilterVisibility}
                className={style.filterIcon}
              />
              {filterVisible && (
                <>
                  <DatePicker
                    selected={startDate ?? undefined}
                    onChange={handleDateChange}
                    startDate={startDate ?? undefined}
                    endDate={endDate ?? undefined}
                    selectsRange
                    className={style.datePicker}
                    placeholderText="Select a date range"
                  />
                  {(startDate || endDate) && (
                    <button
                      onClick={() => handleDateChange([null, null])}
                      className={style.clearFilter}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          {filteredOrders.length > 0 ? (
            <ul className={style.tableBody}>
              {filteredOrders.map((order) => (
                <li
                  key={order.id}
                  className={`${style.tableRow} hover:dark:bg-[#494949]`}
                >
                  <div className={style.orderDetail}>
                    <p
                      className={style.orderId}
                      onClick={() => toggleIdVisibility(order.id)}
                    >
                      <FontAwesomeIcon
                        icon={
                          revealedIds.includes(order.id) ? faEyeSlash : faEye
                        }
                      />
                      {formatOrderId(order.id)}
                    </p>
                  </div>

                  <div className={style.orderDetail}>
                    <p>${(order.amount / 100).toFixed(2)}</p>
                  </div>

                  <div className={style.orderDetail}>
                    <p className={`${style.status} dark:text-white`}>
                      <FontAwesomeIcon icon={faCheck} />
                      {order.status}
                    </p>
                  </div>

                  <div className={style.orderDetail}>
                    <p>
                      {new Date(order.created * 1000).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={style.emptyMessage}>No orders found.</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
