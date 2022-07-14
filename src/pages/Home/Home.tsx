import Accordion from 'components/Accordion/Accordion'
import Button from 'components/Button/Button'
import CardWindow from 'components/CardWindow/CardWindow'
import Checkbox from 'components/Checkbox/Checkbox'
import Columns, { Column } from 'components/Columns/Columns'
import Header from 'components/Header/Header'
import Image from 'components/Image/Image'
import Input from 'components/Input/Input'
import Radio from 'components/Radio/Radio'
import Select from 'components/Select/Select'
import Sidebar from 'components/Sidebar/Sidebar'
import Space from 'components/Space/Space'
import Tabs from 'components/Tabs/Tabs'
import { AuxiliaryParagraph, BigParagraph, H1, H2, H3, H4, LeadParagraph, Paragraph } from 'components/Typography/Typography'
import picDesktop from 'images/pic_desctop.jpg'
import picMobile from 'images/pic_mob.jpg'
import picTablet from 'images/pic_tab.jpg'
import mailRegExp from 'modules/mailRegExp'
import React, { useState } from 'react'

export default function Home() {
  const [windowIsOpen, setWindowIsOpen] = useState(false)

  return (
    <>
      <CardWindow onClose={() => setWindowIsOpen(false)} open={windowIsOpen} />

      <Columns horizontal="stretch">
        <Column>
          <Header onClickMenu={() => setWindowIsOpen(true)} />
        </Column>
        <Column desktop={3} tablet={3}></Column>

        <Column desktop={9} tablet={5}>
          <Space indent={2} />
          <H1>Тестовое задание </H1>
          <Space indent={2} />
          <LeadParagraph>Уровень: junior</LeadParagraph>
          <Space indent={8} />
        </Column>

        <Column desktop={3} tablet={3}>
          <Sidebar />
        </Column>

        <Column desktop={9} tablet={5}>
          <Columns>
            <Column desktop={9}>
              <Paragraph anchor="welcome">
                Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку. В шапке страницы укажи своё ФИО,
                так всем будет удобнее. В менюхе под иконкой бургером мы хотели бы также видеть твои данные. <br />
                Ну что, поехали?
              </Paragraph>
              <Space indent={10} />
              <H2 anchor="grid">Сетка</H2>
              <Space indent={3} />
              <Paragraph>
                Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка «резиновая»
                — переменной ширины.
              </Paragraph>
            </Column>
          </Columns>
          <Space indent={6} />

          <H3>Десктоп (1200+)</H3>
          <Space indent={4} />
          <Columns>
            {[
              { title: 'Контент', measure: '1072–1312' },
              { title: 'Колонок', measure: '12' },
              { title: 'Ширина колонки', measure: '60-80' },
              { title: 'Межколонник', measure: '32' },
            ].map(col => (
              <Column desktop={3} tablet={4} mobile={2}>
                <AuxiliaryParagraph color="grey">{col.title}</AuxiliaryParagraph>
                <Space indent={1}></Space>
                <LeadParagraph>{col.measure}</LeadParagraph>
                <Space indent={2}></Space>
              </Column>
            ))}
          </Columns>
          <Space indent={4} />
          <Image src={picDesktop} />
          <Space indent={8} />

          <H3>Планшет (736+)</H3>
          <Space indent={4} />
          <Columns>
            {[
              { title: 'Контент', measure: '672–928' },
              { title: 'Колонок', measure: '8' },
              { title: 'Ширина колонки', measure: '56-88' },
              { title: 'Межколонник', measure: '32' },
            ].map(col => (
              <Column desktop={3} tablet={4} mobile={2}>
                <AuxiliaryParagraph color="grey">{col.title}</AuxiliaryParagraph>
                <Space indent={1}></Space>
                <LeadParagraph>{col.measure}</LeadParagraph>
                <Space indent={2}></Space>
              </Column>
            ))}
          </Columns>
          <Space indent={4} />
          <Image src={picTablet} />
          <Space indent={8} />

          <H3>Телефон (320+)</H3>
          <Space indent={4} />
          <Columns>
            {[
              { title: 'Контент', measure: '296–424' },
              { title: 'Колонок', measure: '4' },
              { title: 'Ширина колонки', measure: '56-88' },
              { title: 'Межколонник', measure: '24' },
            ].map(col => (
              <Column desktop={3} tablet={4} mobile={2}>
                <AuxiliaryParagraph color="grey">{col.title}</AuxiliaryParagraph>
                <Space indent={1}></Space>
                <LeadParagraph>{col.measure}</LeadParagraph>
                <Space indent={2}></Space>
              </Column>
            ))}
          </Columns>
          <Space indent={6} />
          <Image src={picMobile} />
          <Space indent={8} />

          <Columns>
            <Column desktop={9}>
              <H2 anchor="typography">Типографика</H2>
              <Space indent={3} />
              <Paragraph>Используется шрифт Graphik. На телефонах стили типографики переопределяются</Paragraph>
            </Column>
          </Columns>

          <Space indent={6} />

          <Tabs
            tabs={[
              {
                name: 'Десктоп',
                children: (
                  <>
                    <Space indent={6} />
                    <Columns>
                      {[
                        { name: 'Заголовок H1, 48/56, bold', exaple: <H1>Текст заголовка</H1> },
                        { name: 'Заголовок H2, 32/40, bold', exaple: <H2>Текст заголовка</H2> },
                        { name: 'Заголовок H3, 24/32, medium', exaple: <H3>Текст заголовка</H3> },
                        { name: 'Заголовок H2, 32/40, bold', exaple: <H4>Текст заголовка</H4> },
                        { name: 'Лид P_Lead, 24/32, regular', exaple: <LeadParagraph>Текст лида</LeadParagraph> },
                        { name: 'Крупный текст P_18, 18/28, regular', exaple: <BigParagraph>Крупный текст</BigParagraph> },
                        { name: 'Основной текст P_16, 16/24, regular', exaple: <Paragraph>Основной текст</Paragraph> },
                        {
                          name: 'Впомогательный текст P_14, 14/20, regular',
                          exaple: <AuxiliaryParagraph>Вспомогательный текст</AuxiliaryParagraph>,
                        },
                      ].map((row, index, rows) => (
                        <>
                          <Column desktop={4}>
                            <AuxiliaryParagraph color="grey">{row.name}</AuxiliaryParagraph>
                          </Column>
                          <Column desktop={8}>{row.exaple}</Column>
                          {index != rows.length - 1 ? (
                            <Column>
                              <Space indent={6} />
                            </Column>
                          ) : null}
                        </>
                      ))}
                    </Columns>
                  </>
                ),
              },
              {
                name: 'Телефон',
                children: (
                  <>
                    <Space indent={6} />
                    <Columns>
                      {[
                        { name: 'Заголовок H1, 48/56, bold', exaple: <H1>Текст заголовка</H1> },
                        { name: 'Заголовок H2, 32/40, bold', exaple: <H2>Текст заголовка</H2> },
                        { name: 'Заголовок H3, 24/32, medium', exaple: <H3>Текст заголовка</H3> },
                        { name: 'Заголовок H2, 32/40, bold', exaple: <H4>Текст заголовка</H4> },
                        { name: 'Лид P_Lead, 24/32, regular', exaple: <LeadParagraph>Текст лида</LeadParagraph> },
                        { name: 'Крупный текст P_18, 18/28, regular', exaple: <BigParagraph>Крупный текст</BigParagraph> },
                        { name: 'Основной текст P_16, 16/24, regular', exaple: <Paragraph>Основной текст</Paragraph> },
                        {
                          name: 'Впомогательный текст P_14, 14/20, regular',
                          exaple: <AuxiliaryParagraph>Вспомогательный текст</AuxiliaryParagraph>,
                        },
                      ].map((row, index, rows) => (
                        <>
                          <Column desktop={4}>
                            <AuxiliaryParagraph color="grey">{row.name}</AuxiliaryParagraph>
                          </Column>
                          <Column desktop={8}>{row.exaple}</Column>
                          {index != rows.length - 1 ? (
                            <Column>
                              <Space indent={6} />
                            </Column>
                          ) : null}
                        </>
                      ))}
                    </Columns>
                  </>
                ),
              },
            ]}
          />

          <Space indent={10} />

          <H2 anchor="ui">UI</H2>
          <Space indent={6} />

          <H3>Текстовое поле</H3>
          <Space indent={4} />
          <Columns>
            <Column desktop={4}>
              <AuxiliaryParagraph color="grey">Не запполненый</AuxiliaryParagraph>
              <Space indent={2} />
              <Input
                errors={[
                  {
                    error: 'Email not valid',
                    validReqex: mailRegExp,
                  },
                ]}
                placeholder="E-mail"
              />
            </Column>
            <Column desktop={4}>
              <AuxiliaryParagraph color="grey">Ввод</AuxiliaryParagraph>
              <Space indent={2} />
              <Input
                defaultValue={'yapesenkupoy@happy.com'}
                errors={[
                  {
                    error: 'Email not valid',
                    validReqex: mailRegExp,
                  },
                ]}
                placeholder="E-mail"
              />
            </Column>
            <Column desktop={4}>
              <AuxiliaryParagraph color="grey">Ошибка</AuxiliaryParagraph>
              <Space indent={2} />

              <Input
                defaultValue={'yapesenkupoyhappy.com'}
                errors={[
                  {
                    error: 'Email not valid',
                    validReqex: mailRegExp,
                  },
                ]}
                placeholder="E-mail"
              />
            </Column>
          </Columns>
          <Space indent={9} />

          <H3>Выпадающий список</H3>
          <Space indent={3} />
          <Paragraph>Компонент состоит из текстового поля и выпадающей подсказки</Paragraph>
          <Space indent={3} />
          <Columns>
            <Column desktop={4}>
              <Select
                placeholder="Выберите что-нибудь"
                options={[
                  { text: 'Первый стул', id: 1 },
                  { text: 'Второй стул', id: 2 },
                  { text: 'Выбранный пункт', id: 3 },
                  { text: 'Теорема Эскобара', id: 4 },
                ]}
              />
              <Space indent={3} />
            </Column>
            <Column desktop={4}>
              <Select
                placeholder="Выберите что-нибудь"
                defaultID={2}
                options={[
                  { text: 'Первый стул', id: 1 },
                  { text: 'Второй стул', id: 2 },
                  { text: 'Выбранный пункт', id: 3 },
                  { text: 'Теорема Эскобара', id: 4 },
                ]}
              />
            </Column>
          </Columns>
          <Space indent={8} />

          <H3>Кнопка</H3>
          <Space indent={4} />

          <Columns>
            <Column desktop={3}>
              <AuxiliaryParagraph color="grey">Без состояния</AuxiliaryParagraph>
              <Space indent={3} />
              <Button>Отправить</Button>
              <Space indent={3} />
            </Column>
            <Column desktop={1}></Column>
            <Column desktop={3}>
              <AuxiliaryParagraph color="grey">Неактивна</AuxiliaryParagraph>
              <Space indent={3} />
              <Button disabled={true}>Отправить</Button>
            </Column>
          </Columns>
          <Space indent={5} />

          <H3>Чекбокс, радиобаттон</H3>
          <Space indent={4} />

          <Columns>
            <Column desktop={6}>
              <Checkbox defaultValue={true} text="Выбери меня" />
              <Space indent={3} />
              <Checkbox text="Выбери меня" />
              <Space indent={3} />
              <Checkbox text="Птица счастья завтрашнего дня" />
              <Space indent={4} />
            </Column>
            <Column desktop={6}>
              <Radio
                options={[
                  { text: 'Последний фонарик устал', id: '1' },
                  { text: 'А в горле сопят комья воспоминаний!', id: '2' },
                  { text: 'Моя оборона!', id: '3' },
                ]}
              />
            </Column>
          </Columns>
          <Space indent={4} />

          <H3>Аккордеон</H3>
          <Space indent={2} />
          <Accordion title="Аккордеон">
            <Paragraph>
              Гоpдость полными вагонами золотыми погонами <br />С юга дyют молодые вет… <br />
              Pазpывая в клочья облака не забыли шлют из далека
              <br />
              С дома мама <br />И не последняя любовь
              <br /> А по небy бегyт видишь чьи-то следы <br />
              Это может быть ты это может быть я <br />
              Это может наш дрyг <br />
              Это может нам поют свои
            </Paragraph>
          </Accordion>
          <Space indent={1} />
          <Accordion title="Аккордеон">
            <Paragraph>
              Гоpдость полными вагонами золотыми погонами <br />С юга дyют молодые вет… <br />
              Pазpывая в клочья облака не забыли шлют из далека
              <br />
              С дома мама <br />И не последняя любовь
              <br /> А по небy бегyт видишь чьи-то следы <br />
              Это может быть ты это может быть я <br />
              Это может наш дрyг <br />
              Это может нам поют свои
            </Paragraph>
          </Accordion>
          <Space indent={1} />
          <Accordion title="Аккордеон">
            <Paragraph>
              Гоpдость полными вагонами золотыми погонами <br />С юга дyют молодые вет… <br />
              Pазpывая в клочья облака не забыли шлют из далека
              <br />
              С дома мама <br />И не последняя любовь
              <br /> А по небy бегyт видишь чьи-то следы <br />
              Это может быть ты это может быть я <br />
              Это может наш дрyг <br />
              Это может нам поют свои
            </Paragraph>
          </Accordion>
          <Space indent={5} />
        </Column>
      </Columns>
    </>
  )
}
