import { Card, Form, Icon, List, Modal, Rate, Select, Typography } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { connect } from 'dva';
import moment from 'moment';
import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { ListItemDataType } from './data.d';
import { StateType } from './model';
import styles from './style.less';
import Axios from 'axios';

const { Paragraph } = Typography;

interface ListSearchProjectsProps extends FormComponentProps {
  dispatch: Dispatch<any>;
  listSearchProjects: StateType;
  loading: boolean;
}

const getKey = (id: string, index: number) => `${id}-${index}`;

class ListSearchProjects extends Component<ListSearchProjectsProps> {
  state = {
    visible: false,
    ownerId: null,
    clickedPostId: null
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // @ts-ignore
  handleOk = async () => {
    await this.updateOwner();
    this.setState({
      visible: false,
    });
  };

  // @ts-ignore
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listSearchProjects/fetch',
    });
  }

  updateOwner = async () => {
    try {
      await Axios.put('http://localhost:1001/ticket', {
        newOwnerId: this.state.ownerId,
        ticketId: this.state.clickedPostId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      listSearchProjects: { list = [] },
      loading,
    } = this.props;

    const cardList = list && (
      <List<ListItemDataType>
        rowKey="id"
        loading={loading}
        grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={
                <img
                  alt={item.event.name}
                  src={item.event.imageSrc}
                  style={{ backgroundSize: 'contain' }}
                />
              }
              actions={[
                <span onClick={() => {
                  this.showModal()
                  this.setState({ clickedPostId: item.id })
                }}>
                  <Icon type="smile" key="smile" style={{ marginRight: 10 }} />
                  Transfer
                </span>,
              ]}
            >
              <Card.Meta
                title={
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Rate allowHalf defaultValue={item.event.rating} />
                      <a style={{ marginRight: 10 }}>{item.event.name}</a>
                    </div>
                  </>
                }
              />
            </Card>
            <Modal
              title="Transfer"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Select Person</p>
              <Select
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={value => {
                  this.setState({ ownerId: value });
                }}
                filterOption={(input, option) =>
                  // @ts-ignore
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Select.Option value="2">John Cena</Select.Option>
              </Select>
            </Modal>
          </List.Item>
        )}
      />
    );

    return (
      <div className={styles.coverCardList}>
        <div className={styles.cardList}>{cardList}</div>
      </div>
    );
  }
}

const WarpForm = Form.create<ListSearchProjectsProps>({
  onValuesChange({ dispatch }: ListSearchProjectsProps) {
    dispatch({
      type: 'listSearchProjects/fetch',
    });
  },
})(ListSearchProjects);

export default connect(
  ({
    listSearchProjects,
    loading,
  }: {
    listSearchProjects: StateType;
    loading: { models: { [key: string]: boolean } };
  }) => ({
    listSearchProjects,
    loading: loading.models.listSearchProjects,
  }),
)(WarpForm);
