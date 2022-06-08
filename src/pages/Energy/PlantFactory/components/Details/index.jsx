import React from 'react';
import { ResponsiveGrid, Box, Select, Switch, TimePicker2 } from '@alifd/next';
import styles from './index.module.scss';
import Img from '@icedesign/img';
import factoryImage from '@/static/images/plantFactory/factoryImge.png';
import hygrometer from '@/static/images/plantFactory/hygrometer.png';
import hygrometerColours from '@/static/images/plantFactory/hygrometerColours.png';
import lamplight from '@/static/images/plantFactory/lamplight.png';
import sterilize from '@/static/images/plantFactory/sterilize.png';
import sunlight from '@/static/images/plantFactory/sunlight.png';
import temperature from '@/static/images/plantFactory/temperature.png';
import temperatureColours from '@/static/images/plantFactory/temperatureColours.png';
import waterPump from '@/static/images/plantFactory/waterPump.png';
import wind from '@/static/images/plantFactory/wind.png';
import acrossBar from '@/static/images/plantFactory/acrossBar.png';
import verticalBar from '@/static/images/plantFactory/verticalBar.png';
import location from '@/static/images/location.png';

const { Cell } = ResponsiveGrid;
const { Option } = Select;

const Details = () => {
  return (
    <ResponsiveGrid device="desktop">
      <Cell colSpan={12} className={styles.detailsWrap1}>
        <div className={styles.detailsLeft}>
          <Box>
            <Box className={styles.oneRowLeftTop}>
              <img src={factoryImage} className={styles.factoryImage} />
            </Box>
            <div className="levelGap" />
            <Box className={styles.oneRowLeftBottom}>
              <ResponsiveGrid device="desktop" gap={2}>
                <Cell colSpan={6} className={styles.oneRowLeftBottom1}>
                  <div>
                    <Img src={temperatureColours} height={100} />
                    <div className={styles.temperatureTitle}>温度</div>
                    <div className={styles.temperatureValue}>26.1&#8451;</div>
                  </div>
                </Cell>
                <Cell colSpan={6} className={styles.oneRowLeftBottom1}>
                  <div>
                    <Img src={hygrometerColours} height={100} />
                    <div className={styles.temperatureTitle}>湿度</div>
                    <div className={styles.temperatureValue}>80%</div>
                  </div>
                </Cell>
              </ResponsiveGrid>
              <Box className={styles.oneRowLeftBottom2} justify={'center'}>
                <p>小岗村植物工厂</p>
                <p className={styles.address}><Img src={location} height={12} />&nbsp;&nbsp;安徽省凤阳县小岗村河溪镇</p>
              </Box>
            </Box>
          </Box>
        </div>

        <div className="verticalGap" />

        <div className={styles.detailsRight}>
          <Box className={styles.oneRowRightWrap}>
            <div className={styles.controlBtn}>
              <span>温控设置</span>
              <Switch
                defaultChecked
              />
            </div>
            <div className={styles.controlItem}>
              <div className={styles.controlImg}>
                <img src={temperature} alt="temperature" />
              </div>
              <div className={styles.controlCenter}>
                <div className={styles.controlTop}>
                  <p>日间温控起始-结束时间</p>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                  <span>-</span>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                </div>
                <div>
                  日间时段温度设定:&nbsp;&nbsp;
                  <Select
                    defaultValue="26°C"
                    style={{ marginRight: 8 }}
                  >
                    <Option value="24°C">24°C</Option>
                    <Option value="25°C">25°C</Option>
                    <Option value="26°C">26°C</Option>
                  </Select>
                </div>
              </div>
              <div className={styles.controlRight}>
                <div className={styles.controlTop}>
                  <p>夜间温控起始-结束时间</p>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                  <span>-</span>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                </div>
                <div>
                  夜间时段温度设定:&nbsp;&nbsp;
                  <Select
                    defaultValue="20°C"
                  >
                    <Option value="20°C">20°C</Option>
                    <Option value="22°C">22°C</Option>
                    <Option value="24°C">24°C</Option>
                  </Select>
                </div>
              </div>
            </div>
          </Box>

          {/* 湿度设置 */}
          <Box className={styles.oneRowRightWrap}>
            <div className={styles.controlBtn}>
              <span>湿度设置</span>
              <Switch
                defaultChecked={false}
              />
            </div>
            <div className={styles.controlItem}>
              <div className={styles.controlImg}>
                <img src={hygrometer} alt="temperature" />
              </div>
              <div className={styles.controlCenter}>
                <div className={styles.controlTop}>
                  <p>日间湿度起始-结束时间</p>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                  <span>-</span>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                </div>
                <div>
                  日间时段湿度设定:&nbsp;&nbsp;
                  <Select
                    defaultValue="26°C"
                    style={{ marginRight: 8 }}
                  >
                    <Option value="24°C">24°C</Option>
                    <Option value="25°C">25°C</Option>
                    <Option value="26°C">26°C</Option>
                  </Select>
                </div>
              </div>
              <div className={styles.controlRight}>
                <div className={styles.controlTop}>
                  <p>夜间湿度起始-结束时间</p>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                  <span>-</span>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                </div>
                <div>
                  夜间时段湿度设定:&nbsp;&nbsp;
                  <Select
                    defaultValue="80%"
                  >
                    <Option value="70%">70%</Option>
                    <Option value="80%">80%</Option>
                    <Option value="90%">90%</Option>
                  </Select>
                </div>
              </div>
            </div>
          </Box>

          {/* 铺热设置 */}
          <Box className={styles.oneRowRightWrap}>
            <div className={styles.controlBtn}>
              <span>铺热设置</span>
              <Switch
                defaultChecked
              />
            </div>
            <div className={styles.controlItem}>
              <div className={styles.controlImg}>
                <img src={sunlight} alt="temperature" />
              </div>
              <div className={styles.controlCenter}>
                <div className={styles.controlTop}>
                  <p>日间铺热起始-结束时间</p>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                  <span>-</span>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                </div>
                <div>
                  日间时段铺热设定:&nbsp;&nbsp;
                  <Select
                    defaultValue="26°C"
                  >
                    <Option value="24°C">24°C</Option>
                    <Option value="25°C">25°C</Option>
                    <Option value="26°C">26°C</Option>
                  </Select>
                </div>
              </div>
              <div className={styles.controlRight}>
                <div className={styles.controlTop}>
                  <p>夜间铺热起始-结束时间</p>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                  <span>-</span>
                  <TimePicker2
                    format="HH:mm"
                    style={{ width: '110px' }}
                    hasClear={false}
                  />
                </div>
                <div>
                  夜间时段铺热设定:&nbsp;&nbsp;
                  <Select
                    defaultValue="20°C"
                    style={{ marginRight: 8 }}
                  >
                    <Option value="20°C">20°C</Option>
                    <Option value="22°C">22°C</Option>
                    <Option value="24°C">24°C</Option>
                  </Select>
                </div>
              </div>
            </div>
          </Box>
        </div>

      </Cell>

      <Cell colSpan={12}>
        <div className="levelGap" />
      </Cell>

      <Cell colSpan={12} className={styles.detailsWrap2}>
        <div className={styles.settingWrap}>
          <div className={styles.waterSetting}>
            <div className={styles.controlBtn}>
              <span>水泵设置</span>
              <Switch
                defaultChecked
              />
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemImg}>
              <img src={waterPump} alt="water" />
            </div>
            <div className={styles.setItem}>
              开启间隔:&nbsp;&nbsp;
              <Select
                defaultValue="60min"
              >
                <Option value="10min">10min</Option>
                <Option value="20min">20min</Option>
                <Option value="30min">30min</Option>
                <Option value="40min">40min</Option>
                <Option value="50min">50min</Option>
                <Option value="60min">60min</Option>
              </Select>
            </div>
            <div className={styles.setItem}>
              持续时长:&nbsp;&nbsp;
              <Select
                defaultValue="30min"
              >
                <Option value="10min">10min</Option>
                <Option value="20min">20min</Option>
                <Option value="30min">30min</Option>
                <Option value="40min">40min</Option>
                <Option value="50min">50min</Option>
                <Option value="60min">60min</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="verticalGap" />

        <div className={styles.settingWrap}>
          <div className={styles.waterSetting}>
            <div className={styles.controlBtn}>
              <span>新风设置</span>
              <Switch
                defaultChecked={false}
              />
            </div>
          </div>
          <div className={styles.singleItem}>
            <div className={styles.itemImg}>
              <img src={wind} alt="water" style={{ height: '55px' }} />
            </div>
            <div className={styles.setItem}>
              开启间隔:&nbsp;&nbsp;
              <Select
                defaultValue="30min"
              >
                <Option value="10min">10min</Option>
                <Option value="20min">20min</Option>
                <Option value="30min">30min</Option>
                <Option value="40min">40min</Option>
                <Option value="50min">50min</Option>
                <Option value="60min">60min</Option>
              </Select>
            </div>
            <div className={styles.setItem}>
              持续时长:&nbsp;&nbsp;
              <Select
                defaultValue="60min"
              >
                <Option value="10min">10min</Option>
                <Option value="20min">20min</Option>
                <Option value="30min">30min</Option>
                <Option value="40min">40min</Option>
                <Option value="50min">50min</Option>
                <Option value="60min">60min</Option>
              </Select>
            </div>
          </div>
        </div>
      </Cell>

      <Cell colSpan={12}>
        <div className="levelGap" />
      </Cell>


      <Cell colSpan={12} className={styles.detailsWrap2}>
        <div className={styles.settingWrap}>
          <div className={styles.lightSingleItem}>
            <div className={styles.itemImg}>
              <img src={lamplight} alt="water" />
            </div>
            <div className={styles.lightSetting}>
              <span>灯控设置</span>
              <Switch
                defaultChecked={false}
              />
            </div>
          </div>
        </div>

        <div className="verticalGap" />

        <div className={styles.settingWrap}>
          <div className={styles.lightSingleItem}>
            <div className={styles.itemImg}>
              <img src={sterilize} alt="water" />
            </div>
            <div className={styles.lightSetting}>
              <span>杀菌设置</span>
              <Switch
                defaultChecked
              />
            </div>
          </div>
        </div>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Details;
