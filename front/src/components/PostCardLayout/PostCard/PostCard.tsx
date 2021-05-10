import IconButton from '@/components/Common/Button/Icon';
import { CardContainer, CardContent, CardContentWrap, CardImage, CardInfoWrap } from './styles';
import { IArticle } from '@/types/article';
import dayjs from 'dayjs';
import { memo } from 'react';

interface PropTypes {
  data: IArticle;
}

function PostCard({ data }: PropTypes) {
  return (
    <CardContainer>
      <CardImage href={data.articleUrl}>
        <div className="card-image">
          <img
            src="https://media.vlpt.us/images/jjunyjjuny/post/e7f0d557-1fab-4a61-ae8e-b5cb1a911b09/ek7ji4zrimozpp2yzk0a.png?w=640"
            alt=""
          />
        </div>
      </CardImage>
      <CardContentWrap>
        <div className="sub-info">{dayjs(data.insertDate).format('MMM DD, YYYY')}</div>
        <CardContent href={data.articleUrl}>
          <h3>{data.title}</h3>
        </CardContent>
      </CardContentWrap>
      <CardInfoWrap>
        <div className="card-info-left">
          <img className="post-info-image" src={data.providerAvatar} alt={data.providerName} />
          {data.providerName}
        </div>
        <div className="card-info-right">
          <ul className="buttons">
            <li>
              <IconButton to="/like" iconName="like" size="small" styleType="default" />
            </li>
            <li>
              <IconButton to="/bookmark" iconName="bookmark" size="small" styleType="default" />
            </li>
          </ul>
        </div>
      </CardInfoWrap>
    </CardContainer>
  );
}

export default memo(PostCard);
