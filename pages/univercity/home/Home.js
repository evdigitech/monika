import React, { useState } from 'react'
import VoteForm from '../../vote/VoteForm'

function Home() {
    const [showVoteForm, setShowVoteForm] = useState(true);

    const openVoteForm = () => setShowVoteForm(true);
    const closeVoteForm = () => setShowVoteForm(false);

    return (
        <div>           
            <VoteForm
                show={showVoteForm}
                close={closeVoteForm} />
        </div>
    )
}

export default Home
