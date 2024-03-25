/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import DialogActions from '@mui/joy/DialogActions'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'

interface ModalProps {
  open: boolean
  setOpen: (status: boolean, value: string) => void
}
const CutomModal = ({ open, setOpen }: ModalProps) => {
  return (
    <React.Fragment>
    <Modal open={open} onClose={() => { setOpen(false, 'NO') }}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>
          <WarningRoundedIcon />
          Confirmation
        </DialogTitle>
        <Divider />
        <DialogContent>
          Are you sure you want to discard all of your notes?
        </DialogContent>
        <DialogActions>
          <Button variant="solid" color="danger" onClick={() => { setOpen(false, 'OK') }}>
            Discard notes
          </Button>
          <Button variant="plain" color="neutral" onClick={() => { setOpen(false, 'NO') }}>
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  </React.Fragment>
  )
}

export default CutomModal
