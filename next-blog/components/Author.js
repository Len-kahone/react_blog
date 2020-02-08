import {Avatar,Divider} from 'antd'
import '../public/style/components/author.css'

const Author =()=>{

    return (
      <div className="author-div comm-box">
        <div>
          {' '}
          <Avatar
            size={100}
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1135064372,163164656&fm=26&gp=0.jpg"
          />
        </div>
        <div className="author-introduction">
          光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
          <Divider>社交账号</Divider>
          <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" />
        </div>
      </div>
    );

}

export default Author