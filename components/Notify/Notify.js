import { Flex, Alert } from '@chakra-ui/react'

import { CheckCircleIcon } from '@chakra-ui/icons'

function Notify() {

    return (

        <Flex>
            <Alert status='success' variant='left-accent'>
                <CheckCircleIcon mr='3' />
                Action Completed successfully.
            </Alert>
        </Flex>

    )

}

export default Notify