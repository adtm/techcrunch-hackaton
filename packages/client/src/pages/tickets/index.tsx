import { Card, Form, List, Typography, Button } from 'antd';
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
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listSearchProjects/fetch',
      payload: {
        count: 8,
      },
    });
  }

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
              cover={<img alt={item.title} src={item.cover} />}
            >
              <Card.Meta
                title={
                  <>
                    <a style={{ marginRight: 10 }}>{item.title}</a>
                    <Button type="primary">Transfer</Button>
                  </>
                }
                description={
                  <>
                    <Paragraph className={styles.item} ellipsis={{ rows: 2 }}>
                      {item.subDescription}
                    </Paragraph>
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
      </div>
    );
  }
}

const WarpForm = Form.create<ListSearchProjectsProps>({
  onValuesChange({ dispatch }: ListSearchProjectsProps) {
    // 表单项变化时请求数据
    // 模拟查询表单生效
    dispatch({
      type: 'listSearchProjects/fetch',
      payload: {
        count: 8,
      },
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
