import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import lighting from '../../../../../static/images/lighting.png';
import addressIcon from '../../../../../static/images/address_icon.png';
import roofImg from '../../../../../static/images/roofImg.png';
import outputImg from '@/static/images/output.png';
import airImg from '@/static/images/airImg.svg';

const RoofStatic = (props) => {
  const { dataSource } = props;

  return (
    <div>
      <div className={styles.farmlandTop}>
        <div className={styles.farmlandContent}>
          <div className={styles.contentLeft}>
            <img src={lighting} alt="l" />
            <div className={styles.addressTitle}>{dataSource.name}</div>
            <div className={styles.addressWrap}>
              <div className={styles.addressName}>
                <img src={addressIcon} alt="icon" />{dataSource.address}
              </div>
              <div className={styles.addressDetailName}>{dataSource.addressDetail}</div>
            </div>

            <hr />

            <div className={styles.workStatusWrap}>
              <div>逆变器工作状态：</div>
              <div className={styles.systemStatus}>{dataSource.workStatus}</div>
            </div>
            <div className={styles.systemStatusWrap}>
              <div>设备状态：</div>
              <div className={styles.systemStatus}>{dataSource.deviceStatus}</div>
            </div>
          </div>
        </div>

        <div className={styles.verticalGap} />

        <div className={styles.centerData}>
          <div className={styles.dataWrap}>
            <div className={styles.dataItem}>
              日发电量
              <div className={styles.dataNum}>{dataSource.dayValue}kwh</div>
            </div>

            <div className={styles.verticalGap} />

            <div className={styles.dataItem2}>
              月发电量
              <div className={styles.dataNum2}>{dataSource.monthValue}kwh</div>
            </div>
          </div>

          <div className={styles.levelGap} />

          <div className={styles.dataWrap}>
            <div className={styles.dataItem3}>
              总发电量
              <div className={styles.dataNum3}>{dataSource.totalValue}kwh</div>
            </div>

            <div className={styles.verticalGap} />

            <div className={styles.dataItem4}>
              额定有功功率
              <div className={styles.dataNum4}>{dataSource.power}kwh</div>
            </div>
          </div>
        </div>

        <div className={styles.verticalGap} />

        <div className={styles.roofImg}>
          <img src={roofImg} alt="roof" />
        </div>
      </div>

      <div className={styles.levelGap} />

      <div>
        <div>
          <div className="farmland-center-content top-border-bottom">
            <div className="farmland-center-content-item roof-center-content-item">
              <div className="farmland-center-content-item-img roof-air-img">
                <img src={airImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  机内空气温度
                </div>
                <div className="farmland-center-content-item-des-num">
                  {dataSource.air}°C
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item roof-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  总视在功率
                </div>
                <div className="farmland-center-content-item-des-num">
                  {dataSource.totalPower}VA
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item roof-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  总直流功率
                </div>
                <div className="farmland-center-content-item-des-num">
                  {dataSource.directPower}W
                </div>
              </div>
            </div>

          </div>

          <div className="farmland-center-content">
            <div className="farmland-center-content-item roof-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  总有功功率
                </div>
                <div className="farmland-center-content-item-des-num">
                  {dataSource.totalUsePower}W
                </div>
              </div>
            </div>
            <div className="farmland-center-content-item roof-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  总无功功率
                </div>
                <div className="farmland-center-content-item-des-num">
                  {dataSource.totalUselessPower}var
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item roof-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  总功率因数
                </div>
                <div className="farmland-center-content-item-des-num">
                  {dataSource.powerFactor}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default RoofStatic;
