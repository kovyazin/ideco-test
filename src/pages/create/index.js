import React, { useState } from 'react'

import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import SnackBar from '@material-ui/core/Snackbar'
import Container from '@material-ui/core/Container'

import { ContentCenter } from '@ui'
import { todosActions, todosSelectors } from '@features/todos'

const useStyles = makeStyles({
  card: {
    maxWidth: '400px',
    marginBottom: '30px'
  },
  field: {
    marginBottom: '20px'
  }
})

const validationSchema = Yup.object({
  title: Yup.string().required('Пожалуйста, введите название задачи'),
  user: Yup.string().required('Пожалуйста, введите имя исполнителя')
})

export const CreatePage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const todosIsFetching = useSelector(todosSelectors.todosListIsFetching)
  const usersIsFetching = useSelector(todosSelectors.usersListIsFetching)
  const todosError = useSelector(todosSelectors.todosListError)
  const usersError = useSelector(todosSelectors.usersListError)

  const [isOpenNotification, setIsOpenNotification] = useState(false)

  const handleCreateTodoSubmit = (values, { resetForm }) => {
    dispatch(todosActions.createTodoItem(values))
    setIsOpenNotification(true)
    resetForm({})
  }

  return (
    <Container>
      <ContentCenter fullHeight>
        <Card className={classes.card}>
          <CardHeader
            title="Добавление новой задачи"
            titleTypographyProps={{ align: 'center' }}
          />
          <CardContent>
            {todosIsFetching || usersIsFetching ? (
              <CircularProgress />
            ) : todosError || usersError ? (
              <Alert severity="error">
                <AlertTitle>Ошибка</AlertTitle>
                Ошибка загрузки данных
              </Alert>
            ) : (
              <Formik
                onSubmit={handleCreateTodoSubmit}
                validationSchema={validationSchema}
                initialValues={{ title: '', user: '' }}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Field
                      component={TextField}
                      className={classes.field}
                      name="title"
                      size="small"
                      variant="outlined"
                      placeholder="Введите название задачи"
                      fullWidth
                    />
                    <Field
                      component={TextField}
                      className={classes.field}
                      name="user"
                      size="small"
                      variant="outlined"
                      placeholder="Введите имя исполнителя"
                      fullWidth
                    />
                    <Button
                      type="submit"
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      Добавить
                    </Button>
                  </Form>
                )}
              </Formik>
            )}
          </CardContent>
        </Card>

        <SnackBar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isOpenNotification}
          autoHideDuration={5000}
          onClose={() => setIsOpenNotification(false)}
        >
          <Alert
            severity="success"
            onClose={() => setIsOpenNotification(false)}
          >
            Задача была успешно создана
          </Alert>
        </SnackBar>

        <Button
          onClick={() => history.push('/')}
          variant="outlined"
          color="primary"
        >
          Вернуться на главную
        </Button>
      </ContentCenter>
    </Container>
  )
}
