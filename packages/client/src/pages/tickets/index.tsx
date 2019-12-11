import { Card, Form, List, Typography, Icon, Rate, Modal, Select } from 'antd';
import React, { Component } from 'react';

import { Dispatch } from 'redux';
import { FormComponentProps } from 'antd/es/form';
import { connect } from 'dva';
import moment from 'moment';
import AvatarList from './components/AvatarList';
import { StateType } from './model';
import { ListItemDataType } from './data.d';
import styles from './style.less';

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
    person: null,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // @ts-ignore
  handleOk = e => {
    console.log(e);
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

  render() {
    const {
      listSearchProjects: { list = [] },
      loading,
    } = this.props;

    console.log(this.props.listSearchProjects);
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
              cover={<img alt={item.event.name} src={item.event.imageSrc} />}
              actions={[
                <span onClick={() => this.showModal()}>
                  <Icon type="smile" key="smile" style={{ marginRight: 10 }} />
                  Transfer
                </span>,
              ]}
            >
              <Card.Meta
                title={
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Rate allowHalf defaultValue={2.5} />
                      <a style={{ marginRight: 10 }}>{item.event.name}</a>
                    </div>
                  </>
                }
              />
              <div className={styles.cardItemContent}>
                <span>{moment(item.updatedAt).fromNow()}</span>
                <div className={styles.avatarList}>
                  <AvatarList size="small">
                    {item.members.map((member, i) => (
                      <AvatarList.Item
                        key={getKey(item.id, i)}
                        src={member.avatar}
                        tips={member.name}
                      />
                    ))}
                  </AvatarList>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    );

    return (
      <div className={styles.coverCardList}>
        <div className={styles.cardList}>{cardList}</div>
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
            onChange={value => this.setState({ person: value })}
            filterOption={(input, option) =>
              // @ts-ignore
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="tom">Tom</Select.Option>
            <Select.Option value="paul">Paul</Select.Option>
          </Select>
        </Modal>
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
