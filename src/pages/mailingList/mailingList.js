import React from 'react'
import Card from 'src/components/card'
import Table from 'src/components/table'

export default function MailingList() {
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <Card path={'/mailing_list'} indices={['emails_count']} />
        <Card path={'/mailing_list'} indices={['groups']} />
      </div>
      <Table path="/mailing_list" showActions={true} buttonNames={['Edit', 'Delete']} />
    </>
  )
}
