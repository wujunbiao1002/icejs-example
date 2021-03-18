import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';
import lighting from '../../../../../static/images/lighting.png';
import addressIcon from '../../../../../static/images/address_icon.png';
import roofImg from '../../../../../static/images/roofImg.png';
import outputImg from '@/static/images/output.png';

const RoofStatic = () => {
  return (
    <div>
      <div className={styles.farmlandTop}>
        <div className={styles.farmlandContent}>
          <div className={styles.contentLeft}>
            <img src={lighting} alt="l" />
            <div className={styles.addressTitle}>小岗村屋顶光伏1</div>
            <div className={styles.addressWrap}>
              <div className={styles.addressName}>
                <img src={addressIcon} alt="icon" />安徽省凤阳县小岗村
              </div>
              <div className={styles.addressDetailName}>小溪河镇安阳小区</div>
            </div>

            <hr />

            <div className={styles.workStatusWrap}>
              <div>逆变器工作状态：</div>
              <div className={styles.systemStatus}>故障停运</div>
            </div>
            <div className={styles.systemStatusWrap}>
              <div>设备状态：</div>
              <div className={styles.systemStatus}>运行</div>
            </div>
          </div>
        </div>

        <div className={styles.verticalGap} />

        <div className={styles.centerData}>
          <div className={styles.dataWrap}>
            <div className={styles.dataItem}>
              日发电量
              <div className={styles.dataNum}>30.12kwh</div>
            </div>

            <div className={styles.verticalGap} />

            <div className={styles.dataItem2}>
              月发电量
              <div className={styles.dataNum2}>231.45kwh</div>
            </div>
          </div>

          <div className={styles.levelGap} />

          <div className={styles.dataWrap}>
            <div className={styles.dataItem3}>
              日发电量
              <div className={styles.dataNum3}>30.12kwh</div>
            </div>

            <div className={styles.verticalGap} />

            <div className={styles.dataItem4}>
              日发电量
              <div className={styles.dataNum4}>30.12kwh</div>
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
            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
                </div>
              </div>
            </div>

          </div>

          <div className="farmland-center-content">
            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
                </div>
              </div>
            </div>

            <div className="farmland-center-content-item">
              <div className="farmland-center-content-item-img">
                <img src={outputImg} alt="output" />
              </div>
              <div className="farmland-center-content-item-des">
                <div className="farmland-center-content-item-des-title">
                  输出总有功
                </div>
                <div className="farmland-center-content-item-des-num">
                  31.35kw
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
