import { FormOutlined } from '@ant-design/icons'
import { EventEmitter } from '@renderer/services/EventService'
import { EVENT_NAMES } from '@renderer/services/EventService'
import { Button as AntdButton } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const NewTopicButton: FC = () => {
  const { t } = useTranslation()

  const addNewTopic = () => {
    EventEmitter.emit(EVENT_NAMES.ADD_NEW_TOPIC)
  }

  return (
    <Container>
      <Button size="small" color="primary" icon={<FormOutlined />} onClick={addNewTopic}>
        {t('chat.topics.new')}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled(AntdButton)`
  border-radius: 20px;
  padding: 0 12px;
  height: 34px !important;
  font-size: 12px;
  opacity: 0.8;
  transition: all 0.3s ease;
  background-color: var(--color-background-soft);
  color: var(--color-text-2);
  &:hover {
    opacity: 0.9;
    background-color: var(--color-background-mute) !important;
    color: var(--color-text-1) !important;
    border-color: var(--color-border-mute) !important;
  }
`

export default NewTopicButton
