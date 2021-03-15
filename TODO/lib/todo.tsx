interface todo {
  id?: string,
  name: string,
  complete: true | false,
  toggleTodo?: React.ChangeEventHandler<HTMLInputElement>
}

export default todo
